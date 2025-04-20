const BasicInfo = require('../models/BasicInfo');

// Get Basic Info
const getBasicInfo = async (req, res) => {
    try {
        const basicInfo = await BasicInfo.findOne();
        res.json(basicInfo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create or Update Basic Info
const createBasicInfo = async (req, res) => {
    try {
        const { fullName, profilePicture, tagline, shortBio, socialLinks } = req.body;
        let basicInfo = new BasicInfo({
            fullName,
            profilePicture,
            tagline,
            shortBio,
            socialLinks,
        });

        await basicInfo.save();
        res.status(201).json(basicInfo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update Basic Info
const updateBasicInfo = async (req, res) => {
    try {
        const { fullName, profilePicture, tagline, shortBio, socialLinks } = req.body;
        const updatedInfo = await BasicInfo.findOneAndUpdate(
            {},
            { fullName, profilePicture, tagline, shortBio, socialLinks },
            { new: true }
        );
        res.json(updatedInfo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete Basic Info
const deleteBasicInfo = async (req, res) => {
    try {
        await BasicInfo.deleteOne({});
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getBasicInfo, createBasicInfo, updateBasicInfo, deleteBasicInfo };
