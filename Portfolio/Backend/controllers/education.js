const Education = require('../models/education');

// Create a new education entry
const createEducation = async (req, res) => {
    try {
        const { degree, institution, startDate, endDate, description } = req.body;
        
        const education = new Education({
            degree,
            institution,
            startDate,
            endDate,
            description,
        });

        await education.save();
        res.status(201).json(education);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all education entries
const getEducation = async (req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an existing education entry
const updateEducation = async (req, res) => {
    try {
        const { id, degree, institution, startDate, endDate, description } = req.body;
        
        const updatedEducation = await Education.findByIdAndUpdate(
            id,
            { degree, institution, startDate, endDate, description },
            { new: true }
        );
        
        if (!updatedEducation) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        
        res.json(updatedEducation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete an education entry
const deleteEducation = async (req, res) => {
    try {
        const { id } = req.body;
        
        const deletedEducation = await Education.findByIdAndDelete(id);
        
        if (!deletedEducation) {
            return res.status(404).json({ message: 'Education entry not found' });
        }
        
        res.json({ message: 'Education deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createEducation, getEducation, updateEducation, deleteEducation };
