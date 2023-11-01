import React from 'react';
import { CssBaseline, Typography } from '@mui/material';
import Navigation from './Navigation';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#afbdc9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Navigation />
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">
          Welcome to My Online Store
        </Typography>
      </div>
    </div>
  );
};

export default Home;
