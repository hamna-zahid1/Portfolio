import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, LinearProgress } from '@mui/material';

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/skills`)
      .then(res => setSkills(res.data))
      .catch(err => console.error('Failed to load skills', err));
  }, []);

  return (
    <Container id="skills" sx={{ my: 6 }}>
      <Typography variant="h4" gutterBottom>Skills</Typography>
      {skills.map(skill => (
        <Box key={skill._id} sx={{ mb: 2 }}>
          <Typography>{skill.name}</Typography>
          <LinearProgress variant="determinate" value={skill.proficiency} />
        </Box>
      ))}
    </Container>
  );
};

export default SkillsSection;
