require('dotenv').config()
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import routes
const experienceRoutes = require('./routes/experience');
const skillRoutes = require('./routes/skills');
const projectRoutes = require('./routes/projects');
const contactMessageRoutes = require('./routes/contactMessages');
const educationRoutes = require('./routes/education');  // Import education routes

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/experience', experienceRoutes);           // Experience routes
app.use('/api/skills', skillRoutes);                    // Skills routes
app.use('/api/projects', projectRoutes);                // Projects routes
app.use('/api/contactMessages', contactMessageRoutes);  // Contact messages routes
app.use('/api/education', educationRoutes);             // Education routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
