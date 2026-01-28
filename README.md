# TD North Golf Website

A professional golf instruction website for TD North at Crown Golf, Texas Rangers Golf Club.

## Quick Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub account** (if you don't have one): https://github.com/signup
2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it `tdnorthgolf-website`
   - Keep it public or private (your choice)
   - Click "Create repository"
3. **Upload these files** to the repository (drag and drop all files)
4. **Go to Vercel**: https://vercel.com
5. **Sign up/Login with GitHub**
6. **Click "Add New Project"**
7. **Import your GitHub repository**
8. **Click Deploy** - Vercel auto-detects Vite and configures everything

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
cd tdnorthgolf-deploy
vercel
```

## Connect Your Domain

After deploying:
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `tdnorthgolf.com`
4. Update your domain's DNS settings (Vercel will show you what to change)

## Setup Contact Form

The contact form needs a backend to send emails. Free option:

1. Go to https://formspree.io
2. Create a free account
3. Create a new form
4. Copy your form ID (looks like `xyzabc123`)
5. In `src/App.jsx`, find this line:
   ```javascript
   fetch("https://formspree.io/f/YOUR_FORM_ID"
   ```
6. Replace `YOUR_FORM_ID` with your actual form ID

## Local Development

```bash
npm install
npm run dev
```

## Project Structure

```
tdnorthgolf-deploy/
├── public/
│   └── images/          # Your photos
├── src/
│   ├── App.jsx          # Main website component
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind CSS
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Cost

- **Vercel Hosting**: Free (Hobby plan)
- **Domain**: Keep your existing domain (~$15/year to renew)
- **Formspree**: Free (up to 50 submissions/month)

**Total: ~$15/year** (vs $1,080/year with GoDaddy)

## Need Help?

Contact form submissions go to: tdnorthgolf@gmail.com
