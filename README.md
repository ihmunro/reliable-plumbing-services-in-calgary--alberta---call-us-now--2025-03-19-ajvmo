# Calgary Plumbing Landing Page - Maintenance Guide

This guide will help you maintain and customize the Calgary Plumbing landing page. It's written for beginners and provides step-by-step instructions for common updates.

## Table of Contents
- [Updating Text and Styling](#updating-text-and-styling)
- [Managing Links](#managing-links)
- [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
- [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains the company logo and navigation menu. To update:

1. **Company Name/Logo**
```html
<!-- Find this line in the header section -->
<a href="/" class="text-2xl font-bold text-blue-600">Calgary<span class="text-gray-800">Plumbing</span></a>
```
- Change "Calgary" and "Plumbing" to your desired text
- The `text-blue-600` class controls the blue color
- The `text-gray-800` class controls the black text

### Hero Section
Located at the top of the page with the main headline:

```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
    Reliable Plumbing Services in Calgary, Alberta
</h1>
```
- Update the text between the `<h1>` tags
- Text sizes are responsive:
  - `text-4xl`: Mobile devices
  - `md:text-5xl`: Medium screens
  - `lg:text-6xl`: Large screens

### Features Section
Each feature card follows this structure:
```html
<div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 class="text-xl font-bold text-gray-900 mb-4">Reliable Solutions</h3>
    <p class="text-gray-600">Expert plumbing services you can count on, every time.</p>
</div>
```
To modify:
1. Change the heading text between `<h3>` tags
2. Update the description between `<p>` tags
3. Keep the existing classes to maintain styling

### Common Tailwind Classes Explained
- `container mx-auto`: Centers content and sets max-width
- `px-6`: Adds horizontal padding
- `py-4`: Adds vertical padding
- `rounded-xl`: Rounds corners
- `hover:`: Applies styles on mouse hover
- `md:`: Applies styles on medium screens and up

## Managing Links

### Navigation Menu Links
Current navigation links are:
```html
<div class="hidden md:flex space-x-8">
    <a href="#services" class="text-gray-600 hover:text-blue-600">Services</a>
    <a href="#benefits" class="text-gray-600 hover:text-blue-600">Benefits</a>
    <a href="#faq" class="text-gray-600 hover:text-blue-600">FAQ</a>
    <a href="#contact" class="bg-blue-600 text-white px-6 py-2 rounded-full">Contact Us</a>
</div>
```

To update:
1. Locate the `href` attribute in each `<a>` tag
2. Replace with new link destinations:
   - For same-page sections: Use `#section-id`
   - For other pages: Use relative paths (`/about.html`) or full URLs
   - Example: `<a href="/services.html">Services</a>`

### External Links
The CTA button links to the main website:
```html
<a href="https://calgaryplumbing.com" class="inline-block bg-white text-blue-600">
    Get Started
</a>
```
- Replace `https://calgaryplumbing.com` with your actual website URL
- Always include `https://` for external links

## Adding Privacy and Terms Pages

### Footer Links Setup
Current footer links structure:
```html
<div>
    <h4 class="text-lg font-semibold mb-6">Legal</h4>
    <ul class="space-y-2 text-gray-400">
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Site Map</li>
    </ul>
</div>
```

To add proper links:
1. Update the list items with anchor tags:
```html
<ul class="space-y-2 text-gray-400">
    <li><a href="/privacy.html" class="hover:text-white transition-colors">Privacy Policy</a></li>
    <li><a href="/terms.html" class="hover:text-white transition-colors">Terms of Service</a></li>
    <li><a href="/sitemap.html" class="hover:text-white transition-colors">Site Map</a></li>
</ul>
```

2. Create corresponding HTML files:
   - Create `privacy.html` in your root directory
   - Create `terms.html` in your root directory
   - Use the same header and footer as `index.html`

## Troubleshooting

Common issues and solutions:

### Broken Links
If links aren't working:
- Check for typos in `href` attributes
- Verify file names match exactly (case-sensitive)
- Ensure files are in the correct directory
- Test all links after updating

### Styling Issues
If styles aren't applying:
- Check Tailwind CDN link is working
- Verify class names are spelled correctly
- Make sure responsive classes use correct breakpoints (`md:`, `lg:`)
- Test on different screen sizes

### Images Not Loading
For the hero section image:
- Verify the image URL is correct
- Ensure image path is relative to your HTML file
- Check image permissions and hosting
- Consider using local images instead of external URLs

Need more help? Contact your web developer or refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs).