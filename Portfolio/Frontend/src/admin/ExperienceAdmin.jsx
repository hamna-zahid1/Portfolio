import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Typography, Grid, Paper
} from '@mui/material';
import axios from 'axios';

const ExperienceAdmin = () => {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({ jobTitle: '', company: '', duration: '', description: '' });

  const fetchData = async () => {
    try {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/experience`);
    setExperiences(res.data);
    } catch (err) {
    console.error('Error fetching experience:', err);
  }
};
  useEffect(() => { fetchData(); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/experience`, form, {
      headers: { 'x-api-key': import.meta.env.VITE_ADMIN_API_KEY }
    });
    setForm({ jobTitle: '', company: '', duration: '', description: '' });
    fetchData();
  } catch (err) {
    console.error('Error adding education:', err);
  }
};

  const handleDelete = async id => {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/experience/${id}`, {
      headers: { 'x-api-key': import.meta.env.VITE_ADMIN_API_KEY }
    });
    fetchData();
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Add Experience</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}><TextField fullWidth label="Job Title" name="jobTitle" value={form.jobTitle} onChange={handleChange} /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Company" name="company" value={form.company} onChange={handleChange} /></Grid>
          <Grid item xs={6}><TextField fullWidth label="Duration" name="duration" value={form.duration} onChange={handleChange} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Description" name="description" multiline rows={3} value={form.description} onChange={handleChange} /></Grid>
          <Grid item xs={12}><Button  variant="contained" type="submit">Add Experience</Button></Grid>
        </Grid>
      </form>

      <Typography variant="h6" mt={4}>All Experiences</Typography>
      {experiences.map(item => (
        <Paper key={item._id} sx={{ p: 2, mt: 2 }}>
          <Typography><b>{item.jobTitle}</b> at {item.company}</Typography>
          <Typography variant="body2">{item.duration}</Typography>
          <Typography variant="body2">{item.description}</Typography>
          <Button onClick={() => handleDelete(item._id)} color="error" size="small">Delete</Button>
        </Paper>
      ))}
    </Paper>
  );
};

export default ExperienceAdmin;
