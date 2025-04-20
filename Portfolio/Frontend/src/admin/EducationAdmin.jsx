import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Typography, Grid, Paper
} from '@mui/material';
import axios from 'axios';

const EducationAdmin = () => {
  const [educationList, setEducationList] = useState([]);
  const [form, setForm] = useState({
    degree: '',
    institution: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  // Fetch education data
  const fetchEducation = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/education`);
      setEducationList(res.data);
    } catch (err) {
      console.error('Error fetching education:', err);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/education`, form, {
        headers: {
          'x-api-key': import.meta.env.VITE_ADMIN_API_KEY
        }
      });
      setForm({
        degree: '',
        institution: '',
        startDate: '',
        endDate: '',
        description: ''
      });
      fetchEducation();
    } catch (err) {
      console.error('Error adding education:', err);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/education/${id}`, {
        headers: {
          'x-api-key': import.meta.env.VITE_ADMIN_API_KEY
        }
      });
      fetchEducation();
    } catch (err) {
      console.error('Error deleting education:', err);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Add Education</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Degree" name="degree" value={form.degree} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Institution" name="institution" value={form.institution} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Start Date" name="startDate" value={form.startDate} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="End Date" name="endDate" value={form.endDate} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={3}
              value={form.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Add</Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="h6" mt={4}>All Education Entries</Typography>
      {educationList.map(item => (
        <Paper key={item._id} sx={{ p: 2, my: 2 }}>
          <Typography variant="subtitle1"><strong>{item.degree}</strong> - {item.institution}</Typography>
          <Typography variant="body2">{item.startDate} - {item.endDate}</Typography>
          <Typography variant="body2">{item.description}</Typography>
          <Button color="error" onClick={() => handleDelete(item._id)} size="small" sx={{ mt: 1 }}>Delete</Button>
        </Paper>
      ))}
    </Paper>
  );
};

export default EducationAdmin;
