# TOPG.UZ - Power • Discipline • Success

A full-stack web application built with Next.js, Node.js, Express, and MongoDB, featuring an Andrew Tate-inspired design focused on power, discipline, and success.

## Features

- **Daily Posts**: Text, image, and video content
- **Admin Panel**: Secure authentication and content management
- **Responsive Design**: Mobile-first approach with aggressive premium styling
- **Animations**: Smooth Framer Motion animations
- **SEO Optimized**: Meta tags and performance optimizations

## Tech Stack

### Frontend
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

### Backend
- Node.js + Express
- MongoDB with Mongoose
- JWT Authentication
- Multer for file uploads
- Rate limiting and security middleware

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create `.env` file in root directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/topg
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   ```

4. Start MongoDB

5. Start the backend:
   ```bash
   npm run dev
   ```

6. In another terminal, start the frontend:
   ```bash
   cd app
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register admin (initial setup)

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (admin only)
- `PUT /api/posts/:id` - Update post (admin only)
- `DELETE /api/posts/:id` - Delete post (admin only)

## Deployment

### Backend
- Deploy to VPS or cloud provider
- Set environment variables
- Use PM2 for process management

### Frontend
- Deploy to Vercel or Netlify
- Build command: `npm run build`
- Output directory: `.next`

## Admin Setup

1. Register admin user via `/api/auth/register`
2. Login via `/api/auth/login` to get JWT token
3. Use token in Authorization header for protected routes

## License

ISC