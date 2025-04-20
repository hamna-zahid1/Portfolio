import React, { useState } from 'react';
import {
  AppBar, Tabs, Tab, Box, Container
} from '@mui/material';

import EducationAdmin from './EducationAdmin';
import ExperienceAdmin from './ExperienceAdmin';
import SkillsAdmin from './SkillsAdmin';
import ProjectsAdmin from './ProjectsAdmin';
import ContactMessagesAdmin from './ContactMessagesAdmin';

const AdminDashboard = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => setTab(newValue);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="primary">
        <Tabs value={tab} onChange={handleChange} centered>
          <Tab label="Education" />
          <Tab label="Experience" />
          <Tab label="Skills" />
          <Tab label="Projects" />
          <Tab label="Messages" />
        </Tabs>
      </AppBar>
      <Box mt={4}>
        {tab === 0 && <EducationAdmin />}
        {tab === 1 && <ExperienceAdmin />}
        {tab === 2 && <SkillsAdmin />}
        {tab === 3 && <ProjectsAdmin />}
        {tab === 4 && <ContactMessagesAdmin />}
      </Box>
    </Container>
  );
};

export default AdminDashboard;
