# Student Information Form

A simple, professional web form for collecting parent and student information with free database storage using Google Forms.

## Features

- ✅ Clean, responsive design that works on all devices
- ✅ Real-time form validation
- ✅ Phone number auto-formatting
- ✅ Free data storage via Google Forms
- ✅ Success/error handling
- ✅ Professional styling with smooth animations

## Quick Setup (10 minutes)

### Step 1: Set up Google Form (Free)

1. Go to [https://forms.google.com](https://forms.google.com)
2. Create a new form with these exact fields:
   - Parent Last Name (Short answer)
   - Parent First Name (Short answer)
   - Student Last Name (Short answer)
   - Student First Name (Short answer)
   - Grade (Dropdown: PreK, K, 1, 2, 3, 4, 5)
   - Teacher Name (Short answer)
   - Phone Number (Short answer)
   - Email Address (Short answer)

### Step 2: Get Field Names from Google Form

1. Open your Google Form and click the "Preview" button (eye icon)
2. Right-click on the page and select "View Page Source"
3. Search for `entry.` in the source code
4. You'll find lines like: `<input type="text" name="entry.123456789"`
5. Copy each entry number for each field in order

### Step 3: Configure the Form

1. Open `index.html` in a text editor
2. Replace the placeholder entry numbers with your actual ones:
   - Line ~26: `name="entry.123456789"` (Parent Last Name)
   - Line ~32: `name="entry.234567890"` (Parent First Name)
   - Line ~37: `name="entry.345678901"` (Student Last Name)
   - Line ~42: `name="entry.456789012"` (Student First Name)
   - Line ~47: `name="entry.567890123"` (Grade)
   - Line ~60: `name="entry.678901234"` (Teacher Name)
   - Line ~65: `name="entry.789012345"` (Phone Number)
   - Line ~70: `name="entry.890123456"` (Email Address)
3. Save the file

### Step 4: Deploy Your Form

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
- Note: Form submission will work, but will open Google Forms in a new tab

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

1. Go to your Google Form
2. Click the "Responses" tab
3. View all submissions in the spreadsheet or summary view
4. Export data as CSV or connect to Google Sheets

## Customization

### Change Colors
Edit `styles.css` and modify these CSS variables:
- Background gradient: Line 8-9
- Primary color: Line 134 (submit button)
- Focus color: Line 118

### Add More Fields
1. Add the field to your Google Form first
2. Get the new entry ID from the form source
3. Add the field in `index.html` following the existing pattern
4. Add validation in `script.js` if needed

### Change Email Notifications
1. In Google Forms, go to Settings (gear icon)
2. Enable "Collect email addresses" if needed
3. Set up email notifications for new responses

## Browser Support

- ✅ Chrome, Firefox, Safari, Edge (latest versions)
- ✅ Mobile browsers
- ✅ Internet Explorer 11+

## Free Plan Benefits

Google Forms is completely free and includes:
- ✅ Unlimited submissions
- ✅ Built-in spam protection
- ✅ Email notifications
- ✅ Real-time response tracking
- ✅ Automatic data export to Google Sheets

## Files Included

- `index.html` - Main form page
- `styles.css` - Styling and responsive design
- `script.js` - Form validation and submission handling
- `README.md` - Setup instructions (this file)

## Troubleshooting

**Form not submitting?**
- Check that you replaced the placeholder entry numbers with your actual Google Form entry IDs
- Ensure the Google Form URL in the action attribute is correct
- Make sure your Google Form accepts responses

**Entry numbers not working?**
- Double-check that you copied the correct entry IDs from your Google Form source
- Ensure the field order matches between your HTML form and Google Form
- Try submitting directly to your Google Form to verify it's working

**Styling issues?**
- Make sure all three files are in the same folder
- Check that file names match exactly

**Need help?**
- Check Google Forms Help Center: https://support.google.com/forms/
- Test your setup by submitting directly to your Google Form first

## Important Notes

- The form will open Google Forms in a new tab when submitted
- Users will see a Google confirmation page after submission
- All data is stored in your Google account under the form responses
- You can set up automatic email notifications in Google Forms settings

---

**Total setup time: ~10 minutes**
**Cost: FREE**
**Maintenance: None required**
**Storage: Unlimited with Google account**