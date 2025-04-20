import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Typography, Grid, Paper, LinearProgress
} from '@mui/material';
import axios from 'axios';

const SkillsAdmin = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({
    name: '',
    proficiency: ''
  });

  const fetchSkills = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/skills`);
      setSkills(res.data);
    } catch (err) {
      console.error('Error fetching skills:', err);
    }
  };

  useEffect(() => { fetchSkills(); }, []);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/skills`, form, {
        headers: {
          'x-api-key': import.meta.env.VITE_ADMIN_API_KEY
        }
      });
      setForm({ name: '', proficiency: '' });
      fetchSkills();
    } catch (err) {
      console.error('Error adding skill:', err);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/skills/${id}`, {
        headers: {
          'x-api-key': import.meta.env.VITE_ADMIN_API_KEY
        }
      });
      fetchSkills();
    } catch (err) {
      console.error('Error deleting skill:', err);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Add Skill</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Skill Name" name="name" value={form.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Proficiency (0-100)"
              name="proficiency"
              type="number"
              value={form.proficiency}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Add Skill</Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="h6" mt={4}>All Skills</Typography>
      {skills.map(skill => (
        <Paper key={skill._id} sx={{ p: 2, my: 2 }}>
          <Typography variant="subtitle1"><strong>{skill.name}</strong></Typography>
          <LinearProgress variant="determinate" value={Number(skill.proficiency)} sx={{ mt: 1 }} />
          <Button color="error" onClick={() => handleDelete(skill._id)} size="small" sx={{ mt: 1 }}>Delete</Button>
        </Paper>
      ))}
    </Paper>
  );
};

export default SkillsAdmin;
