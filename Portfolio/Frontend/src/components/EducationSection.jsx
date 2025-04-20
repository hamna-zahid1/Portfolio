import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const EducationSection = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/education`)
      .then(res => setEducation(res.data))
      .catch(err => console.error('Failed to load education', err));
  }, []);

  return (
    <Container id="education" sx={{ my: 6 }}>
      <Typography variant="h4" gutterBottom>Education</Typography>
      {education.map(item => (
        <Box key={item._id} sx={{ mb: 3 }}>
          <Typography variant="h6">{item.degree}</Typography>
          <Typography variant="subtitle1">{item.institution}</Typography>
          <Typography variant="body2">{item.startDate} - {item.endDate}</Typography>
          <Typography variant="body1">{item.description}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default EducationSection;
