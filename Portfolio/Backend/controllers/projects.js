const Project = require('../models/projects');

// Create a new project entry
const createProject = async (req, res) => {
    try {
        const { projectTitle, description, technologiesUsed, projectImage, redirectURL } = req.body;
        const project = new Project({
            projectTitle,
            description,
            technologiesUsed,
            projectImage,
            redirectURL,
        });

        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all projects
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a project entry
const updateProject = async (req, res) => {
    try {
        const { id, projectTitle, description, technologiesUsed, projectImage, redirectURL } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            { projectTitle, description, technologiesUsed, projectImage, redirectURL },
            { new: true }
        );
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a project entry
const deleteProject = async (req, res) => {
    try {
        const { id } = req.body;
        await Project.findByIdAndDelete(id);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createProject, getProjects, updateProject, deleteProject };
