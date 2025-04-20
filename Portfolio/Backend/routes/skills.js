const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth');
const {
    createSkill,
    getSkills,
    updateSkill,
    deleteSkill
} = require('../controllers/skills');

// Admin routes to create, update, delete skills
router.post('/', adminAuth, createSkill);   // Create a new skill
router.get('/', getSkills);                 // Get all skills
router.put('/', adminAuth, updateSkill);    // Update an existing skill
router.delete('/', adminAuth, deleteSkill); // Delete a skill

module.exports = router;
