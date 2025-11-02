# Celebration with Image

A minimal static site with an image and celebration (confetti animation) on page load, built with HTML, CSS, Bootstrap, and vanilla JavaScript.

## Files

- `index.html` — Main page (references `image.jpg`)
- `styles.css` — Custom styles (gradient background, animations, fallback emoji)
- `script.js` — Celebration logic (canvas-confetti + emoji fallback)
- `image.jpg` — Your celebration image
- `vercel.json` — Vercel deployment config (static)

## How It Works

1. **Page loads** → image appears with smooth animation
2. **Confetti triggers** automatically using canvas-confetti library (CDN)
3. **Fallback** → if CDN fails, emoji rain plays instead
4. **Click image** → replay the celebration anytime

## Deploy to Vercel

### Option 1: Vercel CLI (Quickest)

```powershell
npm i -g vercel
cd c:\Users\Vedant\Desktop\Patrika
vercel
```

Follow the prompts and your site goes live in seconds.

### Option 2: Git + Vercel Dashboard

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import the repo
4. Vercel auto-detects static site → Deploy

## Customization

- **Change image**: Replace `image.jpg` or edit `src` in `index.html`
- **Change colors**: Edit gradient in `styles.css` or confetti colors in `script.js`
- **Remove CDN**: I can vendor the confetti library locally if you need zero external dependencies

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Confetti uses canvas; emoji fallback for older browsers or if CDN is blocked.
