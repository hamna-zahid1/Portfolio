const Experience = require('../models/experience');

// Create a new experience entry
const createExperience = async (req, res) => {
    try {
        const { jobTitle, company, duration, description } = req.body;
        const experience = new Experience({
            jobTitle,
            company,
            duration,
            description,
        });

        await experience.save();
        res.status(201).json(experience);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all experience entries
const getExperience = async (req, res) => {
    try {
        const experience = await Experience.find();
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an experience entry
const updateExperience = async (req, res) => {
    try {
        const { id, jobTitle, company, duration, description } = req.body;
        const updatedExperience = await Experience.findByIdAndUpdate(
            id,
            { jobTitle, company, duration, description },
            { new: true }
        );
        res.json(updatedExperience);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete an experience entry
const deleteExperience = async (req, res) => {
    try {
        const { id } = req.body;
        await Experience.findByIdAndDelete(id);
        res.json({ message: 'Experience deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createExperience, getExperience, updateExperience, deleteExperience };
