const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    description: { type: String, default: '' },
});

module.exports = mongoose.model('Education', EducationSchema);