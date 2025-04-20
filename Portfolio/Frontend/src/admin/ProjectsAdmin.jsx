import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Typography, Grid, Paper
} from '@mui/material';
import axios from 'axios';

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    url: ''
  });

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects`);
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const projectData = {
      ...form,
      technologies: form.technologies.split(',').map(t => t.trim())
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/projects`, projectData, {
        headers: {
          'x-api-key': import.meta.env.VITE_ADMIN_API_KEY
        }
      });
      setForm({ title: '', description: '', technologies: '', image: '', url: '' });
      fetchProjects();
    } catch (err) {
      console.error('Error adding project:', err);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/projects/${id}`, {
        headers: {
          'x-api-key': import.meta.env.VITE_ADMIN_API_KEY
        }
      });
      fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Add Project</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Title" name="title" value={form.title} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Technologies (comma-separated)" name="technologies" value={form.technologies} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={3} label="Description" name="description" value={form.description} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Image URL" name="image" value={form.image} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Project URL (Live or GitHub)" name="url" value={form.url} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Add Project</Button>
          </Grid>
        </Grid>
      </form>

      <Typography variant="h6" mt={4}>All Projects</Typography>
      {projects.map(project => (
        <Paper key={project._id} sx={{ p: 2, my: 2 }}>
          <Typography variant="subtitle1"><strong>{project.title}</strong></Typography>
          <Typography>{project.description}</Typography>
          <Typography variant="caption">Tech: {project.technologies.join(', ')}</Typography><br />
          <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
          <br />
          <Button color="error" onClick={() => handleDelete(project._id)} size="small" sx={{ mt: 1 }}>Delete</Button>
        </Paper>
      ))}
    </Paper>
  );
};

export default ProjectsAdmin;
