# Cloudflare Pages Deployment Guide

## Deploy fcp.dev via Cloudflare Pages

### Option 1: Connect GitHub Repo (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. Click "Create a project" → "Connect to Git"
3. Select `Food-Context-Protocol/fcp-dev` repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
   - **Environment variables**: None needed
5. Click "Save and Deploy"
6. Cloudflare will build and deploy the site

### Option 2: Direct Upload

```bash
# Install Wrangler CLI (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy directly
cd /Users/jwegis/Projects/fcp-protocol/fcp-dev
npm run build
wrangler pages deploy dist --project-name fcp-dev
```

### DNS Configuration

Since you've already configured Cloudflare DNS:

1. Go to Cloudflare Dashboard → Pages → fcp-dev → Custom domains
2. Add custom domain: `fcp.dev`
3. Cloudflare will automatically configure DNS (CNAME to the Pages deployment)
4. Wait 5-10 minutes for DNS propagation

### Verify Deployment

```bash
curl https://fcp.dev
# Should return the "Coming Soon" page
```

### Auto-Deploy on Push

If you used Option 1 (GitHub connection), Cloudflare Pages will:
- Auto-deploy on every push to `main`
- Create preview deployments for PRs
- Provide build logs in the dashboard

## Next Steps

When ready to update the site:
1. Edit `src/pages/index.astro`
2. Commit and push to `main`
3. Cloudflare will auto-deploy in ~1 minute
