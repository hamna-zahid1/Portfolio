import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const ExperienceSection = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/experience`)
      .then(res => setExperience(res.data))
      .catch(err => console.error('Failed to load experience', err));
  }, []);

  return (
    <Container id="experience" sx={{ my: 6 }}>
      <Typography variant="h4" gutterBottom>Experience</Typography>
      {experience.map(item => (
        <Box key={item._id} sx={{ mb: 3 }}>
          <Typography variant="h6">{item.jobTitle}</Typography>
          <Typography variant="subtitle1">{item.company}</Typography>
          <Typography variant="body2">{item.duration}</Typography>
          <Typography variant="body1">{item.description}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default ExperienceSection;
