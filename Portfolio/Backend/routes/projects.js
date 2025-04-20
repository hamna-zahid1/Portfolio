const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth');
const {
    createProject,
    getProjects,
    updateProject,
    deleteProject
} = require('../controllers/projects');

// Admin routes to create, update, delete projects
router.post('/', adminAuth, createProject);  // Create a new project
router.get('/', getProjects);                // Get all projects
router.put('/', adminAuth, updateProject);   // Update an existing project
router.delete('/', adminAuth, deleteProject); // Delete a project

module.exports = router;
