const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skillName: { type: String, required: true },
    proficiency: { type: String, required: true }, // e.g., "Expert", "80%", etc.
});

module.exports = mongoose.model('Skill', SkillSchema);
