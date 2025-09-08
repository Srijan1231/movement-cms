# Movement CMS Setup Guide

This guide will help you set up the Strapi CMS and connect it to the Next.js frontend.

## 🚀 Quick Start

### 1. Start the Strapi CMS

```bash
cd movement-cms
npm run develop
```

The CMS will be available at: http://localhost:1337

### 2. Create Admin Account

1. Open http://localhost:1337/admin
2. Create your admin account
3. Log in to the admin panel

### 3. Configure Public Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click on **Public** role
3. Enable **find** and **findOne** permissions for all content types:
   - Protest
   - Agenda
   - Update
   - Resource
   - Safety
   - Press
4. Save the permissions

### 4. Connect Frontend

1. Go to the frontend project directory:

   ```bash
   cd ../movement
   ```

2. Create/update `.env.local`:

   ```env
   STRAPI_API_URL=http://localhost:1337/api
   STRAPI_API_TOKEN=your_api_token_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

3. Get API Token:

   - In Strapi admin panel, go to **Settings** → **API Tokens**
   - Create a new token with **Read** permissions
   - Copy the token to your `.env.local` file

4. Start the frontend:
   ```bash
   npm run dev
   ```

## 📊 Adding Sample Data

### Method 1: Through Admin Panel

1. Log in to Strapi admin panel
2. Navigate to each content type
3. Add sample entries using the provided data below

### Method 2: Using API (Advanced)

You can use the provided sample data in `scripts/seed-data.js` to populate the CMS programmatically.

## 📝 Sample Data

### Protests

```json
{
  "title": "March for Justice - City Center",
  "description": "Join us for a peaceful march demanding justice and accountability.",
  "date": "2024-01-15T10:00:00.000Z",
  "location": "City Center Plaza, Main Street",
  "guidelines": "Please bring water, wear comfortable shoes, and follow all safety guidelines.",
  "status": "upcoming"
}
```

### Agendas

```json
{
  "title": "End Police Brutality",
  "description": "We demand an end to police brutality and comprehensive police reform.",
  "icon": "🛡️",
  "priority": 1
}
```

### Updates

```json
{
  "message": "The movement is growing stronger every day. Thank you to all participants!",
  "timestamp": "2024-01-10T14:00:00.000Z",
  "urgent": false
}
```

### Resources

```json
{
  "title": "Protest Safety Guide",
  "description": "Essential safety tips for peaceful protests",
  "file_type": "poster"
}
```

### Safety

```json
{
  "title": "Digital Security Basics",
  "content": "Protect your digital privacy with these essential tips.",
  "tags": ["privacy", "encryption", "mobile"]
}
```

### Press

```json
{
  "title": "Movement Reaches 10,000 Supporters",
  "date": "2024-01-10",
  "content": "The movement has reached a significant milestone with over 10,000 supporters."
}
```

## 🔧 API Testing

Test the API endpoints:

```bash
# Get all protests
curl http://localhost:1337/api/protests

# Get upcoming protests
curl "http://localhost:1337/api/protests?filters[status][$eq]=upcoming"

# Get urgent updates
curl "http://localhost:1337/api/updates?filters[urgent][$eq]=true"

# Get agendas sorted by priority
curl "http://localhost:1337/api/agendas?sort=priority:asc"
```

## 🚀 Deployment

### Strapi Cloud (Recommended)

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Initial Strapi CMS setup"
   git push origin main
   ```

2. **Deploy to Strapi Cloud:**

   - Go to [Strapi Cloud](https://cloud.strapi.io)
   - Connect your GitHub repository
   - Deploy automatically

3. **Update Frontend Environment:**
   ```env
   STRAPI_API_URL=https://your-project.strapiapp.com/api
   STRAPI_API_TOKEN=your_production_api_token
   ```

### Other Platforms

- **Railway**: Connect GitHub repo and deploy
- **Heroku**: Use the Strapi buildpack
- **DigitalOcean**: Use App Platform

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors:**

   - Check CORS configuration in `config/middlewares.ts`
   - Ensure frontend URL is allowed

2. **Permission Errors:**

   - Verify public permissions are set correctly
   - Check API token permissions

3. **Database Issues:**

   - Ensure SQLite file permissions are correct
   - Try deleting `.tmp/data.db` and restarting

4. **Node Version Issues:**
   - Use Node.js 18-22
   - Run `npm rebuild` if needed

### Debug Mode

Start Strapi in debug mode:

```bash
npm run develop -- --debug
```

## 📚 Additional Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi Cloud Documentation](https://docs.strapi.io/cloud/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Strapi logs in the terminal
3. Check browser console for frontend errors
4. Verify environment variables are set correctly

---

**The Final Revolution – We Are Punching Up** 🚀
