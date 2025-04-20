const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectTitle: { type: String, required: true },
    description: { type: String, required: true },
    technologiesUsed: { type: [String], required: true }, // e.g., ["React", "Node.js"]
    projectImage: { type: String, default: '' }, // URL to image (optional)
    redirectURL: { type: String, default: '' }, // URL to live site or GitHub repo (optional)
});

module.exports = mongoose.model('Project', ProjectSchema);
