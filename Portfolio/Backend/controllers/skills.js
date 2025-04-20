const Skill = require('../models/skills');

// Create a new skill entry
const createSkill = async (req, res) => {
    try {
        const { skillName, proficiency } = req.body;
        const skill = new Skill({
            skillName,
            proficiency,
        });

        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all skills
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a skill entry
const updateSkill = async (req, res) => {
    try {
        const { id, skillName, proficiency } = req.body;
        const updatedSkill = await Skill.findByIdAndUpdate(
            id,
            { skillName, proficiency },
            { new: true }
        );
        res.json(updatedSkill);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a skill entry
const deleteSkill = async (req, res) => {
    try {
        const { id } = req.body;
        await Skill.findByIdAndDelete(id);
        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createSkill, getSkills, updateSkill, deleteSkill };
