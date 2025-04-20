const mongoose = require('mongoose');

const BasicInfoSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    profilePicture: { type: String, required: true },
    tagline: { type: String, required: true },
    shortBio: { type: String, required: true },
    socialLinks: {
        twitter: { type: String },
        linkedin: { type: String },
        github: { type: String },
    },
});

module.exports = mongoose.model('BasicInfo', BasicInfoSchema);
