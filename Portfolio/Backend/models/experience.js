const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., "2 years", "6 months"
    description: { type: String, default: '' },
});

module.exports = mongoose.model('Experience', ExperienceSchema);
