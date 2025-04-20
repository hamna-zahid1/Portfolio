const express = require('express');
const router = express.Router();
const adminAuth = require('../middlewares/adminAuth');
const {
    getContactMessages,
    markMessageAsRead,
    deleteMessage
} = require('../controllers/contactMessages');

// Admin routes to get, mark as read, and delete contact messages
router.get('/', getContactMessages);           // Get all contact messages
router.put('/mark-as-read', adminAuth, markMessageAsRead);  // Mark a message as read
router.delete('/', adminAuth, deleteMessage);  // Delete a contact message

module.exports = router;
