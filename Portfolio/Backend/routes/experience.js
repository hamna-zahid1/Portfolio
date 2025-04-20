const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth');
const {
    createExperience,
    getExperience,
    updateExperience,
    deleteExperience
} = require('../controllers/experience');

// Admin routes to create, update, delete experience
router.post('/', adminAuth, createExperience);
router.get('/', getExperience);
router.put('/', adminAuth, updateExperience);
router.delete('/', adminAuth, deleteExperience);

module.exports = router;
