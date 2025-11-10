# 📧 EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Settings:

- **Template Name**: Portfolio Contact Form
- **Subject**: `New Contact Form Message: {{subject}}`

### Template Body:

```
Hello Shubham,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key** (you'll need this)

## Step 5: Update Your Component

Replace the placeholder values in `contact-me.component.ts`:

```typescript
private emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',      // Replace with your actual Service ID
  templateId: 'YOUR_TEMPLATE_ID',    // Replace with your actual Template ID
  publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your actual Public Key
};
```

## Step 6: Test Your Form

1. Run your Angular application
2. Fill out the contact form
3. Click "Send Message"
4. Check your email for the message!

## 🎯 Benefits of EmailJS:

- ✅ **No Backend Required**: Works directly from Angular
- ✅ **Free Tier**: 200 emails/month free
- ✅ **Reliable**: Professional email service
- ✅ **Easy Setup**: No complex server configuration
- ✅ **Secure**: API keys are safe for client-side use

## 🛡️ Security Notes:

- EmailJS public keys are safe to use in client-side code
- The free tier has rate limiting to prevent abuse
- Your actual email credentials are never exposed

## 📧 Email Template Variables Available:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (recipient)

Once setup is complete, your contact form will send emails directly to your inbox!
