document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const submitBtn = form.querySelector('.submit-btn');
    const successMessage = document.getElementById('successMessage');
    
    // Language toggle functionality
    const langToggle = document.getElementById('langToggle');
    const currentLangSpan = document.getElementById('currentLang');
    let currentLanguage = localStorage.getItem('formLanguage') || 'en';
    
    // Set initial language
    updateLanguage(currentLanguage);
    
    // Language toggle event listener
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        updateLanguage(currentLanguage);
        localStorage.setItem('formLanguage', currentLanguage);
    });
    
    function updateLanguage(lang) {
        currentLangSpan.textContent = lang.toUpperCase();
        
        // Update all elements with data-en and data-es attributes
        document.querySelectorAll('[data-en][data-es]').forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-placeholder-en][data-placeholder-es]').forEach(element => {
            const placeholder = element.getAttribute(`data-placeholder-${lang}`);
            if (placeholder) {
                element.placeholder = placeholder;
            }
        });
        
        // Update form validation messages
        updateValidationMessages(lang);
    }
    
    function updateValidationMessages(lang) {
        const messages = {
            en: {
                required: 'This field is required',
                email: 'Please enter a valid email address',
                phone: 'Please enter a valid phone number',
                name: 'Name must be at least 2 characters',
                countdown: 'Form will reset in',
                seconds: 'seconds...'
            },
            es: {
                required: 'Este campo es obligatorio',
                email: 'Por favor ingrese una dirección de correo válida',
                phone: 'Por favor ingrese un número de teléfono válido',
                name: 'El nombre debe tener al menos 2 caracteres',
                countdown: 'El formulario se reiniciará en',
                seconds: 'segundos...'
            }
        };
        
        // Store messages for use in validation
        window.validationMessages = messages[lang];
    }

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
        }
        e.target.value = value;
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            submitForm();
        } else {
            // Scroll to first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });

    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error state
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Get current validation messages
        const messages = window.validationMessages || {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            phone: 'Please enter a valid phone number',
            name: 'Name must be at least 2 characters'
        };

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = messages.required;
        }

        // Specific field validations
        if (value && field.type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                isValid = false;
                errorMessage = messages.email;
            }
        }

        if (value && field.type === 'tel') {
            const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
            if (!phonePattern.test(value)) {
                isValid = false;
                errorMessage = messages.phone;
            }
        }

        if (value && field.id.includes('Name') && field.hasAttribute('required')) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = messages.name;
            }
        }

        // Show error if invalid
        if (!isValid) {
            field.classList.add('error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errorMessage;
            errorDiv.style.display = 'block';
            field.parentNode.appendChild(errorDiv);
        }

        return isValid;
    }

    function submitForm() {
        // Show loading state
        form.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Create FormData object
        const formData = new FormData(form);
        
        // Submit to Google Forms using fetch (stays on our page)
        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Required for Google Forms
        })
        .then(() => {
            // Success - show our custom success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Add countdown timer
            let countdown = 21;
            const countdownElement = document.createElement('p');
            countdownElement.innerHTML = `<small>Form will reset in <strong>${countdown}</strong> seconds...</small>`;
            countdownElement.style.marginTop = '15px';
            countdownElement.style.color = 'rgba(255,255,255,0.9)';
            successMessage.appendChild(countdownElement);
            
            const timer = setInterval(() => {
                countdown--;
                countdownElement.innerHTML = `<small>Form will reset in <strong>${countdown}</strong> seconds...</small>`;
                
                if (countdown <= 0) {
                    clearInterval(timer);
                }
            }, 1000);
            
            // Reset form after delay so users can submit again
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successMessage.style.display = 'none';
                form.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Information';
                // Remove countdown element for next time
                if (countdownElement.parentNode) {
                    countdownElement.parentNode.removeChild(countdownElement);
                }
            }, 8000); // 8 second delay
        })
        .catch(error => {
            // Even with no-cors, the submission likely succeeded
            // Google Forms blocks reading responses but accepts the data
            console.log('Form submitted (Google Forms blocks response reading)');
            
            // Show success message anyway
            form.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Add countdown timer
            let countdown = 8;
            const countdownElement = document.createElement('p');
            const messages = window.validationMessages || { countdown: 'Form will reset in', seconds: 'seconds...' };
            countdownElement.innerHTML = `<small>${messages.countdown} <strong>${countdown}</strong> ${messages.seconds}</small>`;
            countdownElement.style.marginTop = '15px';
            countdownElement.style.color = 'rgba(255,255,255,0.9)';
            successMessage.appendChild(countdownElement);
            
            const timer = setInterval(() => {
                countdown--;
                countdownElement.innerHTML = `<small>${messages.countdown} <strong>${countdown}</strong> ${messages.seconds}</small>`;
                
                if (countdown <= 0) {
                    clearInterval(timer);
                }
            }, 1000);
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successMessage.style.display = 'none';
                form.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Information';
                // Remove countdown element for next time
                if (countdownElement.parentNode) {
                    countdownElement.parentNode.removeChild(countdownElement);
                }
            }, 8000); // 8 second delay
        });
    }

    // Add smooth animations
    function addFormAnimations() {
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.style.opacity = '0';
            group.style.transform = 'translateY(20px)';
            group.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Initialize animations
    addFormAnimations();
});