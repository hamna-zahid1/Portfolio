import React, { useEffect, useState } from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import axios from 'axios';

const ContactMessagesAdmin = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/contactMessages`, {
      headers: { 'x-api-key': import.meta.env.VITE_ADMIN_API_KEY }
    });
    setMessages(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/contactMessages/${id}`, {
      headers: { 'x-api-key': import.meta.env.VITE_ADMIN_API_KEY }
    });
    fetchMessages();
  };

  useEffect(() => { fetchMessages(); }, []);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Contact Messages</Typography>
      {messages.length === 0 ? <Typography>No messages found.</Typography> : (
        messages.map(msg => (
          <Box key={msg._id} sx={{ mb: 3 }}>
            <Typography><strong>{msg.name}</strong> ({msg.email})</Typography>
            <Typography variant="subtitle2">{msg.subject}</Typography>
            <Typography>{msg.message}</Typography>
            <Button color="error" size="small" onClick={() => handleDelete(msg._id)}>Delete</Button>
          </Box>
        ))
      )}
    </Paper>
  );
};

export default ContactMessagesAdmin;
