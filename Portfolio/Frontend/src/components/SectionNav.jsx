import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-scroll';

const SectionNav = () => {
  const sections = ['education', 'experience', 'skills', 'projects', 'contact'];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ gap: 2 }}>
        {sections.map(section => (
          <Link
            key={section}
            to={section}
            smooth
            duration={500}
            offset={-70}
            style={{ textDecoration: 'none' }}
          >
            <Button color="inherit">{section.charAt(0).toUpperCase() + section.slice(1)}</Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default SectionNav;
