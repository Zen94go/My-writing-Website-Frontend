// Local preview uses the backend served from localhost:3000.
// After deploying, replace the production URL below with your Render URL.
const isLocalPreview = ['localhost', '127.0.0.1'].includes(location.hostname);
window.API_BASE_URL = isLocalPreview ? '' : 'https://YOUR-BACKEND.onrender.com';
