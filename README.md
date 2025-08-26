# Student Information Form

A simple, professional web form for collecting parent and student information with free database storage using Formspree.

## Features

- ✅ Clean, responsive design that works on all devices
- ✅ Real-time form validation
- ✅ Phone number auto-formatting
- ✅ Free data storage via Formspree
- ✅ Success/error handling
- ✅ Professional styling with smooth animations

## Quick Setup (5 minutes)

### Step 1: Set up Formspree (Free)

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" and create a free account
3. Once logged in, click "New Form"
4. Give your form a name (e.g., "Student Information Form")
5. Copy your form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

### Step 2: Configure the Form

1. Open `index.html` in a text editor
2. Find line 13: `<form id="studentForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Save the file

### Step 3: Deploy Your Form

**Option A: Upload to any web hosting service**
- Upload all files (`index.html`, `styles.css`, `script.js`) to your web hosting
- Access via your domain

**Option B: Use GitHub Pages (Free)**
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your form will be available at `https://yourusername.github.io/repositoryname`

**Option C: Local Testing**
- Simply open `index.html` in your web browser to test locally
- Note: Form submission will only work when hosted online

## Form Fields

The form collects the following information:
- Parent Last Name
- Parent First Name  
- Student Last Name
- Student First Name
- Grade (PreK, K, 1, 2, 3, 4, 5)
- Teacher Name
- Phone Number
- Email Address

## Viewing Submitted Data

1. Log into your Formspree account
2. Click on your form name
3. View all submissions in the "Submissions" tab
4. Export data as CSV if needed

## Customization

### Change Colors
Edit `styles.css` and modify these CSS variables:
- Background gradient: Line 8-9
- Primary color: Line 95 (submit button)
- Focus color: Line 65

### Add More Fields
1. Add the field in `index.html` following the existing pattern
2. Add validation in `script.js` if needed

### Change Email Notifications
1. In Formspree dashboard, go to Settings
2. Add notification emails
3. Customize email templates

## Browser Support

- ✅ Chrome, Firefox, Safari, Edge (latest versions)
- ✅ Mobile browsers
- ✅ Internet Explorer 11+

## Free Plan Limits

Formspree free plan includes:
- ✅ 50 submissions per month
- ✅ Spam protection
- ✅ Email notifications
- ✅ Form analytics

Need more? Upgrade to paid plan for unlimited submissions.

## Files Included

- `index.html` - Main form page
- `styles.css` - Styling and responsive design
- `script.js` - Form validation and submission handling
- `README.md` - Setup instructions (this file)

## Troubleshooting

**Form not submitting?**
- Check that you replaced `YOUR_FORM_ID` with your actual Formspree ID
- Ensure the form is hosted online (not just opened locally)

**Styling issues?**
- Make sure all three files are in the same folder
- Check that file names match exactly

**Need help?**
- Check Formspree documentation: https://help.formspree.io/
- Test your setup with a simple submission first

---

**Total setup time: ~5 minutes**
**Cost: FREE**
**Maintenance: None required**