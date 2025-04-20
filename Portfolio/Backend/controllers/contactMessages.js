const ContactMessage = require('../models/contactMessages');

// Get all contact messages
const getContactMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Mark a contact message as read
const markMessageAsRead = async (req, res) => {
    try {
        const { id } = req.body;
        const message = await ContactMessage.findByIdAndUpdate(
            id,
            { isRead: true },
            { new: true }
        );
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a contact message
const deleteMessage = async (req, res) => {
    try {
        const { id } = req.body;
        await ContactMessage.findByIdAndDelete(id);
        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getContactMessages, markMessageAsRead, deleteMessage };
