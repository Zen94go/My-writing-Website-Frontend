# Writing Site Frontend

Static, responsive frontend for a personal writing and publishing site. It includes the public article library, article search, category navigation, a pinned articles view, article sharing, likes, comments, and the password-protected admin interface.

## Contents

- `index.html` — site shell and navigation
- `app.js` — page rendering and API requests
- `style.css`, `features.css` — site styles
- `config.js` — backend API URL
- `netlify.toml` — Netlify publish settings and response headers

## Deploy to Netlify

This folder is intended to be the root of its own Git repository.

1. Create a Netlify site from the frontend repository.
2. Leave the base directory and build command empty. The publish directory is `.` and is set in `netlify.toml`.
3. After deploying the backend, edit `config.js` and replace `https://YOUR-BACKEND.onrender.com` with the backend's public Render URL.
4. Commit and redeploy the frontend.

The frontend needs the backend URL to load articles or use the admin panel. Keep this value as a public URL only; never put passwords or setup keys in `config.js`.

## Connect the backend

Set the backend's `FRONTEND_ORIGIN` environment variable in Render to the exact deployed site origin, for example `https://your-site.netlify.app`. If you use a custom domain, include it as well, separated by a comma. Do not include a path or trailing slash.

For local preview, start the backend using the instructions in the backend repository's README and open the local address it prints. The backend serves this frontend during local development.

## Privacy

Visitors do not need accounts to like or comment. A comment's display name, text, and date are shown publicly on its article. Do not ask visitors to put private information in a comment. The frontend contains no administrator password or setup key; those belong only in the backend's private environment settings.
