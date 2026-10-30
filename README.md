# Daycare Finder South Africa

A beginner-friendly, mobile-first daycare directory prototype built with **HTML, CSS and vanilla JavaScript**. It is designed as a job-portfolio project and can be edited and published using an Android phone and a GitHub account.

## Features

- Search by daycare name, suburb/area or province
- Filter by province, age group and maximum monthly fee
- Save favourite listings in the current browser
- Open a Google Maps search for a listing
- Optional phone-call link when a contact number is provided
- Add a listing locally in the current browser
- Responsive layout for phones and computers

## Important demo-data notice

The six starter daycare centres are **fictional sample listings**. They are not real centres, recommendations, or verified childcare providers. Prices and contact details must be checked directly with real centres. Listings added through the form are stored only in that browser using local storage; they are not uploaded to a shared database and will not appear for other visitors.

## Project files

```text
daycare-finder-south-africa/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run the website

1. Extract the ZIP file.
2. Open `index.html` in a browser.
3. Try the search, filters, favourites, map links and add-listing form.

No installation, paid software, server or API key is required.

## Upload to GitHub using an Android phone

1. Open **github.com** in Chrome and sign in (or create a free account).
2. Tap **New repository**.
3. Name it `daycare-finder-south-africa`.
4. Choose **Public**, then create the repository.
5. Open the new repository and choose **Add file → Upload files**.
6. Upload `index.html`, `style.css`, `script.js` and `README.md` from the extracted project folder. If GitHub's mobile page hides the upload option, use Chrome's menu and select **Desktop site**.
7. Wait for the files to finish uploading, enter a commit message such as `Add Daycare Finder website`, and tap **Commit changes**.

## Publish free with GitHub Pages

1. In your repository, open **Settings**.
2. Find **Pages** (under Code and automation).
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Wait a few minutes. Refresh the Pages settings page; GitHub will show your live website address. It will usually look like:
   `https://YOUR-USERNAME.github.io/daycare-finder-south-africa/`

If the website does not appear immediately, wait a few minutes and refresh. Make sure `index.html` is in the repository's root folder.

## Customise the sample data

Open `script.js` and edit the `demoListings` array near the top. Each listing uses these fields:

- `id`: unique identifier
- `name`: centre name
- `area`: suburb or town
- `province`: South African province
- `age`: `Babies`, `Toddlers` or `Preschool`
- `fee`: monthly fee as a number in rand
- `phone`: optional contact number
- `description`: short introduction

Only publish real listings after checking the centre's identity, address, contact details, fees and age groups. Get permission before publishing personal contact information.

## Current limitations / next development steps

This is a front-end portfolio prototype, not a production childcare-verification service. It has no user accounts, admin approval, shared database, live availability, payment processing or automatic verification. Browser favourites and user-added listings are stored on one device only. A future version could add a database, centre-owner accounts, moderation, verified listings and real map integration.

## Portfolio description

**Daycare Finder South Africa** is a responsive web application prototype that helps parents explore daycare options using search and filters. Built with HTML, CSS and JavaScript, it demonstrates DOM manipulation, form handling, browser local storage, responsive design and external map linking.
