import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Admin Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
