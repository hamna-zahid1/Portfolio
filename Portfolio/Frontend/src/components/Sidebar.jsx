import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, height: '100vh', bgcolor: '#f4f4f4' }}>
      <List>
        <ListItem button>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Dashboard" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/education" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Education" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Experience" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/skills" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Skills" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Projects" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemText primary="Contact" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
