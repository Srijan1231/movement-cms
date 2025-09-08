# 🚀 Strapi Cloud Deployment Guide

This guide will walk you through deploying your Movement CMS to Strapi Cloud.

## 📋 Prerequisites

- GitHub account
- Strapi Cloud account (free tier available)
- Git installed on your machine

## 🔧 Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)

1. **Install GitHub CLI** (if not already installed):
   ```bash
   brew install gh  # macOS
   # or download from https://cli.github.com/
   ```

2. **Login to GitHub**:
   ```bash
   gh auth login
   ```

3. **Create repository and push**:
   ```bash
   gh repo create movement-cms --public --source=. --remote=origin --push
   ```

### Option B: Using GitHub Web Interface

1. **Go to GitHub.com** and sign in
2. **Click "New repository"** (green button)
3. **Repository details**:
   - Name: `movement-cms`
   - Description: `Strapi CMS for Movement website`
   - Visibility: Public (required for Strapi Cloud free tier)
   - **Don't** initialize with README (we already have files)
4. **Click "Create repository"**

5. **Connect local repository**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/movement-cms.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Step 2: Deploy to Strapi Cloud

1. **Go to Strapi Cloud**: https://cloud.strapi.io
2. **Sign up/Login** with your GitHub account
3. **Click "Create new project"**
4. **Connect GitHub repository**:
   - Select your `movement-cms` repository
   - Choose the `main` branch
5. **Project configuration**:
   - Project name: `movement-cms`
   - Region: Choose closest to your users
   - Plan: Start with Free tier
6. **Click "Deploy"**

## ⚙️ Step 3: Configure Environment Variables

After deployment, configure these environment variables in Strapi Cloud:

### Required Variables:
```env
# Database (automatically provided by Strapi Cloud)
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-user
DATABASE_PASSWORD=your-db-password

# App Keys (generate new ones for production)
APP_KEYS=your-production-app-keys
JWT_SECRET=your-production-jwt-secret
API_TOKEN_SALT=your-production-api-token-salt
ADMIN_JWT_SECRET=your-production-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-production-transfer-token-salt
```

### Generate Production Secrets:
```bash
# Generate APP_KEYS (run this 4 times for 4 keys)
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate JWT_SECRET
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"

# Generate API_TOKEN_SALT
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"

# Generate ADMIN_JWT_SECRET
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"

# Generate TRANSFER_TOKEN_SALT
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

## 🔐 Step 4: Set Up Admin Account

1. **Access your deployed Strapi**: `https://your-project.strapiapp.com/admin`
2. **Create admin account** with secure credentials
3. **Configure public permissions**:
   - Go to Settings → Users & Permissions Plugin → Roles
   - Click on "Public" role
   - Enable "find" and "findOne" for all content types:
     - Protest
     - Agenda  
     - Update
     - Resource
     - Safety
     - Press Release
   - Save permissions

## 🔑 Step 5: Create API Token

1. **Go to Settings → API Tokens**
2. **Create new token**:
   - Name: `Frontend Access`
   - Description: `Token for frontend application`
   - Token duration: Unlimited
   - Token type: Read-only
3. **Copy the token** - you'll need this for your frontend

## 🔗 Step 6: Update Frontend Configuration

Update your Next.js frontend `.env.local`:

```env
STRAPI_API_URL=https://your-project.strapiapp.com/api
STRAPI_API_TOKEN=your-api-token-here
NEXT_PUBLIC_APP_URL=https://your-frontend-domain.com
```

## 📊 Step 7: Add Sample Data

1. **Access Strapi admin panel**
2. **Add content** through the admin interface:
   - Go to each content type
   - Click "Create new entry"
   - Add sample data from the provided examples

### Quick Content Addition:

**Protests:**
- Title: "March for Justice"
- Date: Future date
- Location: "City Center"
- Status: "upcoming"

**Agendas:**
- Title: "End Police Brutality"
- Priority: 1
- Icon: "🛡️"

**Updates:**
- Message: "Movement is growing strong!"
- Urgent: false

## 🧪 Step 8: Test API Endpoints

Test your deployed API:

```bash
# Test basic connectivity
curl https://your-project.strapiapp.com/api/protests

# Test with authentication
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
     https://your-project.strapiapp.com/api/protests
```

## 🔄 Step 9: Set Up Continuous Deployment

Your Strapi Cloud deployment will automatically redeploy when you push to the main branch:

```bash
# Make changes to your code
git add .
git commit -m "Update content types"
git push origin main
# Strapi Cloud will automatically redeploy
```

## 📱 Step 10: Update Frontend Deployment

If you're deploying your Next.js frontend to Vercel:

1. **Go to Vercel dashboard**
2. **Update environment variables**:
   - `STRAPI_API_URL`: Your Strapi Cloud URL
   - `STRAPI_API_TOKEN`: Your API token
3. **Redeploy** your frontend

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check Node.js version compatibility
   - Ensure all dependencies are in package.json
   - Review build logs in Strapi Cloud dashboard

2. **Permission Errors**:
   - Verify public permissions are set correctly
   - Check API token permissions
   - Ensure content is published (not draft)

3. **CORS Issues**:
   - Add your frontend domain to CORS settings
   - Check environment variables

4. **Database Connection**:
   - Verify database environment variables
   - Check Strapi Cloud database status

### Debug Commands:

```bash
# Check deployment logs
# (Available in Strapi Cloud dashboard)

# Test API locally with production data
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://your-project.strapiapp.com/api/protests?populate=*
```

## 📈 Monitoring & Maintenance

1. **Monitor usage** in Strapi Cloud dashboard
2. **Set up backups** (automatic with Strapi Cloud)
3. **Update dependencies** regularly
4. **Monitor API performance**

## 🎉 Success!

Your Strapi CMS is now deployed and ready to power your Movement website!

### Your API Endpoints:
- **Base URL**: `https://your-project.strapiapp.com/api`
- **Protests**: `/api/protests`
- **Agendas**: `/api/agendas`
- **Updates**: `/api/updates`
- **Resources**: `/api/resources`
- **Safety**: `/api/safety`
- **Press Releases**: `/api/press-releases`

### Next Steps:
1. Add real content through the admin panel
2. Test all API endpoints
3. Update your frontend with the new API URL
4. Deploy your frontend to production

---

**The Final Revolution – We Are Punching Up** 🚀
