# Movement CMS - Strapi Backend

This is the Strapi CMS backend for the Movement website. It provides the content management system for all the data displayed on the frontend.

## 🚀 Features

- **Content Types**: Protests, Agendas, Updates, Resources, Safety Guides, Press Releases
- **Media Management**: File uploads for resources and attachments
- **Public API**: RESTful API endpoints for frontend consumption
- **Admin Panel**: Easy-to-use content management interface
- **Permissions**: Configured for public read access

## 📋 Content Types

### 1. Protests

- **Fields**: title, description, date, location, map_embed, guidelines, status
- **Status**: upcoming, ongoing, completed
- **Purpose**: Manage protest events and demonstrations

### 2. Agendas

- **Fields**: title, description, icon, priority
- **Purpose**: Movement demands and priorities ordered by importance

### 3. Updates

- **Fields**: message, timestamp, urgent
- **Purpose**: Live updates and announcements (urgent ones show in emergency banner)

### 4. Resources

- **Fields**: title, description, file, file_type
- **File Types**: poster, infographic, slogan
- **Purpose**: Downloadable resources for the movement

### 5. Safety

- **Fields**: title, content, tags
- **Purpose**: Digital safety guides and tips

### 6. Press

- **Fields**: title, date, content, attachments
- **Purpose**: Press releases and media materials

## 🛠️ Setup

### Prerequisites

- Node.js 18-22
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run develop
   ```

3. **Access the admin panel:**
   - Open http://localhost:1337/admin
   - Create your admin account
   - Start managing content!

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_FILENAME=.tmp/data.db

# Server
HOST=0.0.0.0
PORT=1337

# App Keys (generate with: node -e "console.log(require('crypto').randomBytes(16).toString('base64'))")
APP_KEYS=your_app_keys_here

# JWT Secret (generate with: node -e "console.log(require('crypto').randomBytes(64).toString('base64'))")
JWT_SECRET=your_jwt_secret_here

# API Token Salt (generate with: node -e "console.log(require('crypto').randomBytes(16).toString('base64'))")
API_TOKEN_SALT=your_api_token_salt_here

# Admin JWT Secret (generate with: node -e "console.log(require('crypto').randomBytes(64).toString('base64'))")
ADMIN_JWT_SECRET=your_admin_jwt_secret_here

# Transfer Token Salt (generate with: node -e "console.log(require('crypto').randomBytes(16).toString('base64'))")
TRANSFER_TOKEN_SALT=your_transfer_token_salt_here
```

### API Endpoints

All content types are available via REST API:

- **Protests**: `GET /api/protests`
- **Agendas**: `GET /api/agendas`
- **Updates**: `GET /api/updates`
- **Resources**: `GET /api/resources`
- **Safety**: `GET /api/safety`
- **Press**: `GET /api/press`

### Query Parameters

- **Populate relations**: `?populate=*`
- **Filter by field**: `?filters[field][$eq]=value`
- **Sort**: `?sort=field:asc` or `?sort=field:desc`
- **Pagination**: `?pagination[page]=1&pagination[pageSize]=10`

### Example API Calls

```bash
# Get all upcoming protests
GET /api/protests?filters[status][$eq]=upcoming&populate=*&sort=date:asc

# Get urgent updates
GET /api/updates?filters[urgent][$eq]=true&sort=timestamp:desc

# Get agendas sorted by priority
GET /api/agendas?sort=priority:asc&populate=*
```

## 🔐 Permissions

The CMS is configured with public read access for all content types. This means:

- ✅ Anyone can read content via API
- ❌ Only authenticated users can create/update/delete content
- 🔧 Admin users have full access via the admin panel

## 📱 Frontend Integration

The frontend Next.js application connects to this Strapi instance using the API endpoints. Update the frontend's `.env.local` file:

```env
STRAPI_API_URL=http://localhost:1337/api
STRAPI_API_TOKEN=your_api_token_here
```

## 🚀 Deployment

### Strapi Cloud (Recommended)

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Initial Strapi setup"
   git push origin main
   ```

2. **Deploy to Strapi Cloud:**
   - Go to [Strapi Cloud](https://cloud.strapi.io)
   - Connect your GitHub repository
   - Deploy automatically

### Other Platforms

- **Railway**: Connect GitHub repo and deploy
- **Heroku**: Use the Strapi buildpack
- **DigitalOcean**: Use App Platform
- **AWS**: Use Elastic Beanstalk or ECS

## 📊 Sample Data

The CMS includes sample data for testing. You can add more content through the admin panel or by creating additional seed scripts.

## 🔧 Development

### Available Scripts

- `npm run develop` - Start development server with hot reload
- `npm run start` - Start production server
- `npm run build` - Build admin panel
- `npm run strapi` - Display all available commands

### Project Structure

```
src/
├── api/                    # Content types and API logic
│   ├── protest/           # Protest content type
│   ├── agenda/            # Agenda content type
│   ├── update/            # Update content type
│   ├── resource/          # Resource content type
│   ├── safety/            # Safety content type
│   └── press/             # Press content type
├── extensions/            # Extensions and customizations
└── index.ts              # Bootstrap and initialization
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**The Final Revolution – We Are Punching Up** 🚀
