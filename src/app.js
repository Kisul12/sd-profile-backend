const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const path = require('path');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes imports
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
const teacherRoutes = require('./routes/teacher.routes');
const galleryRoutes = require('./routes/gallery.routes');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/gallery', galleryRoutes);

const PORT = process.env.PORT || 5000;

module.exports = app;