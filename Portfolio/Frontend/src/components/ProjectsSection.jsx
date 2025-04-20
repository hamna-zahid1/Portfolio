import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Button } from '@mui/material';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error('Failed to load projects', err));
  }, []);

  return (
    <Container id="projects" sx={{ my: 6 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      {projects.map(project => (
        <Box key={project._id} sx={{ mb: 4 }}>
          <Typography variant="h6">{project.title}</Typography>
          <Typography variant="body1">{project.description}</Typography>
          <Typography variant="caption">Tech Used: {project.technologies.join(', ')}</Typography>
          <Box sx={{ mt: 1 }}>
            <Button variant="outlined" href={project.url} target="_blank">
              View Project
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default ProjectsSection;
