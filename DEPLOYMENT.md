# Deployment Guide

This guide will help you deploy the portfolio website to Vercel.

## Prerequisites

1. GitHub account
2. Vercel account (sign up at https://vercel.com)
3. Git installed on your computer

## Step-by-Step Deployment to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   # Initialize git (if not already)
   git init

   # Add all files
   git add .

   # Commit changes
   git commit -m "Initial commit - Portfolio website ready for deployment"

   # Add remote repository (replace with your repo URL)
   git remote add origin https://github.com/your-username/your-repo-name.git

   # Push to GitHub
   git push -u origin master
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/dashboard
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration

3. **Configure (Optional)**
   - Project Name: `aarav-sen-portfolio` (or your choice)
   - Framework Preset: Vite (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel

   # For production deployment
   vercel --prod
   ```

## Environment Variables (If Needed)

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., API keys, email service credentials)

## Custom Domain Setup

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (usually 1-48 hours)

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections display properly
- [ ] Navigation works
- [ ] Mobile responsiveness is good
- [ ] Favicon appears correctly
- [ ] Meta tags are correct (check with View Source)
- [ ] Forms work (if applicable)
- [ ] Links open correctly
- [ ] Images load properly

## Updating Your Site

After making changes:

```bash
# Commit changes
git add .
git commit -m "Update: describe your changes"

# Push to GitHub
git push

# Vercel will automatically deploy the changes!
```

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all dependencies are in package.json
3. Test build locally: `npm run build`
4. Check for TypeScript/ESLint errors

### Images Not Loading

- Ensure images are in the `public` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

### 404 Errors

- The `vercel.json` file handles routing
- All routes should redirect to `/index.html`

## Performance Optimization

The site is already optimized with:
- ✅ Vite build optimization
- ✅ Asset caching headers in vercel.json
- ✅ Lazy loading of images
- ✅ Minified CSS and JS

## Support

For issues with:
- **Vercel Platform**: Check https://vercel.com/docs
- **Website Code**: Contact Rootx Softwares Limited

## Monitoring

After deployment, monitor your site:
- Analytics: Vercel Analytics (enable in dashboard)
- Performance: Lighthouse in Chrome DevTools
- Uptime: Vercel provides 99.99% uptime

---

**Developed by Rootx Softwares Limited**
