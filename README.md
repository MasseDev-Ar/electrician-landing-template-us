# Electrician Landing Template — US

Reusable landing page template for electricians and electrical contractors in the United States.

Built by **MasseDev** as a lightweight, responsive and customizable starting point for local service businesses.

---

## Features

- Fully responsive design
- Mobile navigation
- Call-to-action buttons
- Click-to-call integration
- SMS contact integration
- Configurable business information
- Residential and commercial service sections
- Project showcase
- Customer reviews section
- Service area section
- Scroll reveal animations
- Basic SEO metadata
- Open Graph metadata
- Schema.org Electrician structured data
- Accessibility improvements
- Reduced-motion support
- Lightweight static architecture
- GitHub Pages compatible

---

## Project Structure

```text
electrician-landing-template-us/
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   │
│   └── images/
│       ├── electrical-work.jpg
│       ├── hero-electrician.webp
│       ├── proyecto1.jpg
│       ├── proyecto2.jpg
│       └── proyecto3.jpg
│
├── css/
│   ├── responsive.css
│   └── styles.css
│
├── js/
│   └── main.js
│
├── .gitignore
├── index.html
└── README.md


Client Setup

Before publishing a website for a real client, complete the following checklist.

1. Business Configuration

Open:

js/main.js

Update:

const businessConfig = {
    name: "Your Electric Company",


    phone: "(555) 555-0123",


    phoneRaw: "15555550123",


    city: "Your City",


    state: "Your State",


    country: "United States",


    email: "hello@yourbusiness.com",


    smsMessage:
        "Hi, I found your website and I'd like to request a quote for electrical work.",
};
Important

phone is the human-readable version displayed on the website.

Example:

(512) 555-0184

phoneRaw is used by the call and SMS links.

Example:

15125550184

Do not include spaces, parentheses or hyphens in phoneRaw.

2. Business Identity

Search index.html for:

Your Electric Company
YOUR COMPANY
Your City
Your State
Your City, ST

Replace all placeholders with the client's real information.

Also update:

company name
logo initials
city
state
service area
footer information
3. Services

Review the services section in:

index.html

Default services include:

Residential Electrical
Panel Upgrades
Lighting Installation
Electrical Repairs
EV Charger Installation
Commercial Electrical

Remove, rename or add services according to the client's actual business.

Never advertise a service the client does not provide.

4. Project Images

Replace the demo images inside:

assets/images/

Current files:

hero-electrician.webp
electrical-work.jpg
proyecto1.jpg
proyecto2.jpg
proyecto3.jpg

Prefer:

WebP when practical
compressed images
descriptive filenames
real client work whenever available

Also update every image alt attribute in index.html.

5. Projects

Update the Projects section with real information.

Replace:

Residential Project
Panel Upgrade
Lighting Installation
Your City, ST

Use real project descriptions whenever possible.

Do not present stock or demo photographs as completed client projects.

6. Statistics

The template contains placeholders such as:

XX+
XXX+
X.X

Replace them with verified client information.

Examples:

12+
Years of experience


500+
Projects completed


4.9
Average customer rating

If verified statistics are not available, remove the statistics rather than inventing them.

7. Customer Reviews

The template includes placeholder reviews.

Replace:

Customer A.
Customer B.
Customer C.

and all demo review text with verified customer reviews.

Do not publish fictional testimonials as real customer reviews.

If the client does not have usable reviews, remove or redesign the section.

8. Service Area

Update the Service Area section.

Replace:

City One
City Two
City Three
City Four
City Five
Surrounding Areas

with actual locations served by the business.

9. SEO

Review the <head> section of:

index.html

Update the following.

Page Title
<title>Your Electric Company | Licensed Electrician</title>

A typical local version could be:

<title>Business Name | Electrician in City, ST</title>
Meta Description

Update:

<meta
    name="description"
    content="Professional residential and commercial electrical services."
>

Describe the real business, services and location.

10. Open Graph

Update:

<meta
    property="og:title"
    content="Your Electric Company | Electrical Services"
>

and:

<meta
    property="og:description"
    content="Professional residential and commercial electrical services."
>

Also review:

<meta
    property="og:image"
    content="./assets/images/hero-electrician.webp"
>

For a production deployment, use the appropriate public image URL when required.

11. Structured Data

Update the JSON-LD block inside index.html.

Template:

{
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Your Electric Company",
    "description": "Residential and commercial electrical services.",
    "telephone": "+1-555-555-0123",
    "areaServed": "Your City, Your State"
}

Use only accurate client information.

12. Favicon

Replace:

assets/icons/favicon.svg

with the client's favicon or brand icon.

Also verify:

<link
    rel="icon"
    href="./assets/icons/favicon.svg"
    type="image/svg+xml"
>
13. Branding and Colors

Global colors are defined in:

css/styles.css

Look for:

:root

The default template uses a charcoal, copper and ivory visual system.

Adjust the variables to match the client's branding instead of changing colors individually throughout the stylesheet.

14. Final Pre-Publish Checklist

Before publishing, verify:

 Business name replaced
 Logo / initials replaced
 Phone number replaced
 phoneRaw replaced
 Email replaced
 City replaced
 State replaced
 Service areas replaced
 Services verified
 Project information replaced
 Project images replaced
 Image alt text reviewed
 Customer reviews verified
 Statistics verified or removed
 Page title updated
 Meta description updated
 Open Graph updated
 Structured data updated
 Favicon updated
 Call buttons tested
 SMS buttons tested
 Email link tested
 Mobile navigation tested
 Desktop layout tested
 Tablet layout tested
 Mobile layout tested
 No placeholder content remains
 No demo business information remains
Development

This project uses plain:

HTML
CSS
JavaScript

No build process or framework is required.

For local development, open the project with a local development server such as VS Code Live Server.

Deployment

The template is compatible with static hosting services such as GitHub Pages.

Before deployment, always complete the client setup and final pre-publish checklist.

Template Workflow

Recommended workflow for a new client:

Template
   ↓
Create new repository
   ↓
Configure business data
   ↓
Replace content
   ↓
Replace images
   ↓
Customize branding
   ↓
Configure SEO
   ↓
Test responsive design
   ↓
Test contact actions
   ↓
Deploy

Do not develop client-specific changes directly in this template repository.

Keep this repository clean and reusable.

License

This template was created by MasseDev.

Internal commercial use and customization are reserved for MasseDev projects unless otherwise specified.

Built by MasseDev.



Después:


```powershell
git status
git add README.md
git commit -m "docs: add US template setup and deployment guide"
git push