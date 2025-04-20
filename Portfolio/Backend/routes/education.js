const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth');
const {
    createEducation,
    getEducation,
    updateEducation,
    deleteEducation
} = require('../controllers/education');

// Admin routes to create, update, delete education
router.post('/', adminAuth, createEducation);   // Create a new education entry
router.get('/', getEducation);                  // Get all education entries (can be public)
router.put('/', adminAuth, updateEducation);    // Update an existing education entry
router.delete('/', adminAuth, deleteEducation); // Delete an education entry

module.exports = router;
