# Neo Chat - Real-Time Chat Application

A modern, full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. Neo Chat enables users to engage in seamless real-time messaging, create group channels, share files, and manage their profiles—all within a sleek, responsive interface.

## ✨ Key Highlights

- 🚀 **Production-Ready** - Fully deployable with secure authentication and data storage
- ⚡ **Real-Time** - Instant messaging powered by Socket.IO
- 📁 **GridFS Storage** - Efficient file and image management with MongoDB GridFS
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS and Radix UI
- 🔐 **Secure** - JWT authentication, bcrypt password hashing, and CORS protection

## 📸 Screenshots

### Login Page

![Login Page](./Screenshot/login.png)

### Profile Creation

![Profile Creation](./Screenshot/profile_creation.png)

### Main Page

![Main Page](./Screenshot/Main_page.png)

### Contact Details

![Contact Details](./Screenshot/contact_details.png)

### Channel Management

![Channel Interface](./Screenshot/channel.png)

### Chat Interface

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="./Screenshot/chat1.png" alt="Chat Interface 1" width="45%">
  <img src="./Screenshot/chat2.png" alt="Chat Interface 2" width="45%">
</div>

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="./Screenshot/chat3.png" alt="Chat Interface 3" width="45%">
  <img src="./Screenshot/chat4.png" alt="Chat Interface 4" width="45%">
</div>

## 🚀 Features

### Core Functionality

- ⚡ **Real-time messaging** with Socket.IO - Instant message delivery
- 🔐 **Secure authentication** - JWT-based user authentication with HTTP-only cookies
- 💬 **Direct messaging** - Private one-on-one conversations
- 📢 **Channel system** - Create and manage group channels
- 👥 **Channel administration** - Admin controls for channel management (add/remove members, edit details)
- 📎 **File sharing** - Upload and share images and documents
- 🖼️ **Profile & Channel Images** - Custom avatars and channel icons stored in GridFS
- 📜 **Message persistence** - Complete message history stored in MongoDB
- 🔍 **Contact search** - Find and connect with other users
- 👤 **Member management** - Add or remove members from channels (Admin only)

### User Experience

- 📱 **Fully responsive** - Optimized for mobile, tablet, and desktop
- ✨ **Smooth animations** - Lottie animations for enhanced UX
- 🎯 **Intuitive UI** - Clean and user-friendly design
- ⚡ **Fast performance** - Optimized build with Vite

## 🛠 Tech Stack

### Frontend

- **React 19** - Modern UI framework with latest features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled component primitives
- **Socket.IO Client** - Real-time bidirectional communication
- **Axios** - Promise-based HTTP client
- **Zustand** - Lightweight state management
- **React Router v6** - Declarative routing for React
- **Lottie React** - High-quality animations
- **Emoji Picker React** - Emoji support in messages
- **Moment.js** - Date and time formatting

### Backend

- **Node.js (v18+)** - JavaScript runtime environment
- **Express.js** - Minimal and flexible web framework
- **Socket.IO** - Real-time event-based communication
- **MongoDB** - NoSQL document database
- **Mongoose** - Elegant MongoDB object modeling
- **GridFS** - File storage system for MongoDB
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing and security
- **Multer** - Multipart/form-data file upload handling
- **CORS** - Cross-Origin Resource Sharing middleware
- **Cookie-Parser** - Parse HTTP cookies
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
Chat Application/
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   └── ui/              # Radix UI components
│   │   ├── pages/               # Application pages
│   │   │   ├── auth/            # Authentication (Login, Signup)
│   │   │   ├── chat/            # Chat interface components
│   │   │   │   ├── components/
│   │   │   │   │   ├── chat-container/
│   │   │   │   │   ├── contact-container/
│   │   │   │   │   ├── empty-chat-container/
│   │   │   │   │   └── channel-details/
│   │   │   └── profile/         # User profile management
│   │   ├── store/               # Zustand state management
│   │   ├── lib/                 # Utility functions and helpers
│   │   ├── context/             # React Context providers
│   │   ├── utils/               # Constants and helper functions
│   │   └── assets/              # Static assets (images, animations)
│   ├── public/                  # Public static files
│   ├── .env                     # Environment variables
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                       # Backend Node.js application
│   ├── controllers/             # Route controllers
│   │   ├── AuthController.js    # Authentication logic
│   │   ├── MessageController.js # Message handling
│   │   ├── ContactController.js # Contact management
│   │   └── ChannelController.js # Channel operations
│   ├── models/                  # Mongoose schemas
│   │   ├── userModel.js         # User schema
│   │   ├── MessagesModel.js     # Message schema
│   │   └── channelModel.js      # Channel schema
│   ├── routes/                  # API routes
│   │   ├── AuthRoutes.js        # Auth endpoints
│   │   ├── MessageRoutes.js     # Message endpoints
│   │   ├── ContactRoutes.js     # Contact endpoints
│   │   └── ChannelRoutes.js     # Channel endpoints
│   ├── middlewares/             # Custom middlewares
│   │   └── AuthMiddle.js        # JWT verification
│   ├── config/                  # Configuration files
│   │   └── gridfs.js            # GridFS setup
│   ├── socket.js                # Socket.IO configuration
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── index.js                 # Server entry point
├── Screenshot/                   # Application screenshots
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (Local installation or MongoDB Atlas account)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DaviPaluch/neo-chat
   cd "Chat Application"
   # Or if you rename it:
   # cd neo-chat-app
   ```

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration**

   Create `.env` files in both `server/` and `client/` directories:

   **Backend (server/.env)**

   ```env
   # Server Configuration
   PORT=8747
   NODE_ENV=development

   # Database
   DATABASE_URL=mongodb://localhost:27017/neochat
   # OR for MongoDB Atlas:
   # DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/neochat

   # Authentication
   JWT_KEY=your_super_secret_jwt_key_change_this_in_production

   # CORS
   ORIGIN=http://localhost:5173
   ```

   **Frontend (client/.env)**

   ```env
   VITE_SERVER_URL=http://localhost:8747
   ```

5. **Start the development servers**

   **Terminal 1 - Backend server:**

   ```bash
   cd server
   npm run dev
   ```

   Server will start on `http://localhost:8747`

   **Terminal 2 - Frontend application:**

   ```bash
   cd client
   npm run dev
   ```

   Application will start on `http://localhost:5173`

6. **Open your browser**

   Navigate to `http://localhost:5173` to access Neo Chat.

## 🎯 Usage Guide

### Getting Started

1. **Register**: Create a new account with email and password
2. **Profile Setup**:
   - Upload a profile picture
   - Set your first and last name
   - Choose a profile color
3. **Find Contacts**: Search for other users to start chatting

### Direct Messaging

1. Click on **"New DM"** button
2. Search for a user
3. Start your conversation
4. Share text messages, images, and files

### Channel Features

1. **Create Channel**:
   - Click **"Create Channel"**
   - Set channel name and description
   - Upload a channel icon
   - Add members
2. **Manage Channel** (Admin only):
   - Edit channel details
   - Add/remove members from channel
   - Update channel icon
   - Delete channel

### File Sharing

- Click the attachment icon (📎)
- Select images or documents
- Files are stored securely in GridFS
- View images directly in chat
- Download any shared files

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| POST | `/api/auth/logout` | User logout | Yes |
| GET | `/api/auth/user-info` | Get current user | Yes |
| POST | `/api/auth/update-profile` | Update user profile | Yes |
| POST | `/api/auth/add-profile-image` | Upload profile image | Yes |
| DELETE | `/api/auth/remove-profile-image` | Remove profile image | Yes |
| GET | `/api/auth/files/:filename` | Get file from GridFS | No |

### Message Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/messages/get-message` | Get messages with user | Yes |
| POST | `/api/messages/upload-file` | Upload file in DM | Yes |

### Contact Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/contacts/search` | Search contacts | Yes |
| GET | `/api/contacts/get-contacts-for-dm` | Get DM contacts | Yes |
| GET | `/api/contacts/all` | Get all contacts | Yes |

### Channel Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/channels/create-channel` | Create new channel | Yes |
| GET | `/api/channels/get-user-channel` | Get user's channels | Yes |
| GET | `/api/channels/get-channel-messages/:channelId` | Get channel messages | Yes |
| PATCH | `/api/channels/update-channel/:channelId` | Update channel (Admin) | Yes |
| DELETE | `/api/channels/delete-channel/:channelId` | Delete channel (Admin) | Yes |
| POST | `/api/channels/:channelId/members` | Add members to channel (Admin) | Yes |
| DELETE | `/api/channels/:channelId/members/:memberId` | Remove member from channel (Admin) | Yes |

## 🔄 Real-Time Events (Socket.IO)

### Client to Server Events

| Event | Payload | Description |
|-------|---------|-------------|
| `sendMessage` | `{ sender, recipient, content, messageType, fileUrl }` | Send DM |
| `send-channel-message` | `{ channelId, sender, content, messageType, fileUrl }` | Send channel message |

### Server to Client Events

| Event | Payload | Description |
|-------|---------|-------------|
| `receiveMessage` | `message` | Receive new DM |
| `receive-channel-message` | `message` | Receive channel message |

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt with salt rounds for password security
- **HTTP-Only Cookies**: Prevents XSS attacks
- **CORS Protection**: Configured allowed origins
- **Input Validation**: Server-side validation for all inputs
- **File Upload Security**: Multer configuration with file size limits (5MB max)
- **GridFS Storage**: Secure file storage in MongoDB
- **Environment Variables**: Sensitive data in .env files
- **.gitignore**: Prevents committing secrets
- **Admin-Only Operations**: Channel management restricted to admins

## 🎨 UI/UX Features

### Components

- Custom scrollbars
- Toast notifications
- Loading states
- Error handling
- Empty states with animations
- Responsive layouts
- Accessible forms
- Modal dialogs
- Tooltips
- Avatar components with fallbacks
- Member management UI

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm run test

# Run backend tests
cd server
npm run test
```

## 📊 Performance Optimizations

- **Code Splitting**: React lazy loading for routes
- **Image Optimization**: GridFS for efficient storage
- **Build Optimization**: Vite for fast builds
- **State Management**: Zustand for minimal re-renders
- **Socket.IO**: Efficient real-time communication
- **Database Indexing**: MongoDB indexes for fast queries
- **Lazy Loading**: Images and components loaded on demand

## 🐛 Troubleshooting

### Common Issues

**Socket.IO connection fails**

- Check CORS configuration
- Verify `ORIGIN` environment variable
- Ensure server is running

**Images not displaying**

- Verify GridFS is initialized
- Check file paths in database
- Ensure `GET_FILE_URL` function is correct

**Authentication errors**

- Check JWT_KEY matches in server
- Verify cookie settings
- Clear browser cookies

**MongoDB connection fails**

- Check DATABASE_URL format
- Verify network access in MongoDB Atlas
- Ensure database user permissions

**Cannot add members to channel**

- Verify you are the channel admin
- Check if members are valid users
- Ensure `/api/channels/:channelId/members` endpoint is accessible

## 💡 Development Tips & Best Practices

### 🔥 Hot Reload Issues

**Problem: Changes not reflecting**

```bash
# Clear all caches
rm -rf node_modules/.vite
rm -rf dist
npm install

# Frontend specific
cd client
rm -rf node_modules
npm install
npm run dev -- --force

# Backend specific
cd server
# Ensure nodemon is watching correct files
```

**Fix Vite Proxy Issues:**

```javascript
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8747',
        changeOrigin: true,
        secure: false,
      },
      '/socket.io': {
        target: 'ws://localhost:8747',
        ws: true,
      }
    },
    hmr: {
      overlay: true
    }
  }
});
```

### 🔌 Socket Connection Issues

**Check Connection Status:**

```javascript
// Frontend - Add connection monitor
socket.on('connect', () => {
  console.log('✅ Socket connected:', socket.id);
});

socket.on('disconnect', (reason) => {
  console.warn('⚠️ Socket disconnected:', reason);
  if (reason === 'io server disconnect') {
    // Server disconnected, reconnect manually
    socket.connect();
  }
});

socket.on('connect_error', (error) => {
  console.error('❌ Connection error:', error.message);
});
```

**Backend - Add reconnection logic:**

```javascript
const io = new SocketIOServer(server, {
  cors: { /* ... */ },
  pingTimeout: 60000,
  pingInterval: 25000,
  transports: ['websocket', 'polling'],
  upgradeTimeout: 30000,
  maxHttpBufferSize: 1e8, // 100 MB
});
```

**Common Fixes:**

- ✅ Verify CORS settings match exactly
- ✅ Check firewall rules (ports 8747, 5173)
- ✅ Ensure WebSocket support on hosting platform
- ✅ Use secure WebSocket (wss://) in production
- ✅ Add `transports: ['websocket']` if polling fails

### 🗄️ GridFS & File Upload Issues

**Debug GridFS:**

```javascript
// Check GridFS collections
db.uploads.files.find().pretty()
db.uploads.chunks.find().count()

// Clear GridFS (development only)
db.uploads.files.drop()
db.uploads.chunks.drop()
```

**Handle Upload Errors:**

```javascript
// Backend - Add comprehensive error handling
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { mimetype, size, originalname } = req.file;
    
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    if (!allowedTypes.includes(mimetype)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    // Validate file size (5MB)
    if (size > 5 * 1024 * 1024) {
      return res.status(400).json({ error: 'File too large (max 5MB)' });
    }

    // Process upload...
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ error: 'Upload failed' });
  }
};
```

**Frontend - Add upload progress:**

```javascript
const handleFileUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(UPLOAD_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentCompleted);
      },
    });
    return response.data;
  } catch (error) {
    console.error('Upload failed:', error);
    toast.error('Failed to upload file');
  }
};
```

### ⚡ Performance Optimization

**1. React Component Optimization:**

```javascript
// Use React.memo for expensive components
const MessageItem = React.memo(({ message }) => {
  return <div>{message.content}</div>;
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.message._id === nextProps.message._id;
});

// Use useCallback for event handlers
const handleSendMessage = useCallback(() => {
  socket.emit('sendMessage', messageData);
}, [socket, messageData]);

// Use useMemo for expensive computations
const sortedMessages = useMemo(() => {
  return messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
}, [messages]);
```

**2. Backend Query Optimization:**

```javascript
// Add indexes for frequently queried fields
db.messages.createIndex({ sender: 1, recipient: 1, timestamp: -1 });
db.messages.createIndex({ timestamp: -1 });
db.channels.createIndex({ members: 1 });
db.users.createIndex({ email: 1 }, { unique: true });

// Use lean() for faster queries when you don't need Mongoose documents
const messages = await Message.find({ sender: userId })
  .lean()
  .select('content timestamp sender recipient')
  .limit(50);

// Avoid N+1 queries with populate
const channels = await Channel.find({ members: userId })
  .populate('members', 'firstName lastName image')
  .populate('admin', 'firstName lastName');
```

**3. Frontend Bundle Size Optimization:**

```javascript
// Lazy load routes
const Chat = lazy(() => import('./pages/chat'));
const Profile = lazy(() => import('./pages/profile'));

// Use Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/chat" element={<Chat />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</Suspense>

// Analyze bundle size
npm run build
npx vite-bundle-visualizer
```

**4. Image Optimization:**

```javascript
// Backend - Use Sharp for image processing
const sharp = require('sharp');

const processImage = async (buffer) => {
  return await sharp(buffer)
    .resize(800, 800, { fit: 'inside' })
    .jpeg({ quality: 80 })
    .toBuffer();
};

// Frontend - Lazy load images
<img 
  src={imageSrc} 
  loading="lazy" 
  alt="Profile" 
/>
```

### 🧪 Testing

**Setup Testing Environment:**

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm install --save-dev supertest # For API testing
```

**Example Tests:**

```javascript
// Frontend - Component Test
import { render, screen } from '@testing-library/react';
import MessageItem from './MessageItem';

test('renders message content', () => {
  const message = { content: 'Hello World', sender: { firstName: 'John' } };
  render(<MessageItem message={message} />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

// Backend - API Test
const request = require('supertest');
const app = require('../index');

describe('POST /api/auth/login', () => {
  it('should login with valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@test.com', password: 'password123' });
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('user');
  });
});
```

### 🔒 Security Best Practices

```javascript
// 1. Rate Limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// 2. Helmet for security headers
const helmet = require('helmet');
app.use(helmet());

// 3. Input Sanitization
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());

// 4. Validate environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_KEY', 'PORT'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});
```

### 📊 Monitoring & Logging

**Setup Application Monitoring:**

```javascript
// Backend - Custom middleware for request logging
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(
      `${req.method} ${req.path} - Status: ${res.statusCode} - ${duration}ms`
    );
    
    // Log slow requests
    if (duration > 1000) {
      console.warn(`⚠️ Slow request: ${req.method} ${req.path} - ${duration}ms`);
    }
  });
  
  next();
});

// Error tracking with Sentry
const Sentry = require('@sentry/node');

Sentry.init({ dsn: process.env.SENTRY_DSN });

app.use(Sentry.Handlers.errorHandler());
```

### 🔄 Database Migrations

**Handling Schema Changes:**

```javascript
// Create migration script: migrations/001_add_reactions.js
const mongoose = require('mongoose');

module.exports = {
  up: async () => {
    const Message = mongoose.model('Message');
    await Message.updateMany(
      { reactions: { $exists: false } },
      { $set: { reactions: [] } }
    );
  },
  
  down: async () => {
    const Message = mongoose.model('Message');
    await Message.updateMany(
      {},
      { $unset: { reactions: '' } }
    );
  }
};

// Run migrations
node scripts/migrate.js up
```

### 🎯 Code Quality Tools

```bash
# Install ESLint and Prettier
npm install --save-dev eslint prettier eslint-config-prettier
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks

# .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    "react/prop-types": "off",
    "no-unused-vars": "warn"
  }
}

# Run linting
npm run lint
npm run lint:fix
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**

   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the branch**

   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

## 📝 Future Enhancements

- [ ] Voice/Video calling
- [ ] Message reactions (emoji)
- [ ] Message editing and deletion
- [ ] Typing indicators
- [ ] Read receipts
- [ ] Push notifications
- [ ] User blocking
- [ ] Message search
- [ ] Multi-language support
- [ ] Theme customization
- [ ] Message encryption (E2E)
- [ ] Channel roles (Moderator, Member)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Davi Paluch**

- GitHub: [@davipaluch](https://github.com/davipaluch)
- LinkedIn: [Davi Paluch](https://www.linkedin.com/in/davi-paluch-11377b22b/)

---

<div align="center">
  <br>
  <strong>Neo Chat</strong> - Where conversations come alive!
  <br><br>
  Davi Paluch
  <br><br>
  <a href="#top">⬆️ Back to Top</a>
</div>
