import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, form);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Failed to send contact message', err);
    }
  };

  return (
    <Container id="contact" sx={{ my: 6 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      {success && <Typography color="green">Message sent successfully!</Typography>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Name" name="name" value={form.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Subject" name="subject" value={form.subject} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">Send Message</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactSection;
