const mongoose = require('mongoose');

const ContactMessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false }, // Track whether the message is read by the admin
    date: { type: Date, default: Date.now }, // Date when the message was sent
});

module.exports = mongoose.model('ContactMessage', ContactMessageSchema);
