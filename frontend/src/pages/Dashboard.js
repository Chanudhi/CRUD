import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user?.username}!
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Profile Information
          </Typography>
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Typography>
              <strong>Username:</strong> {user?.username}
            </Typography>
            <Typography>
              <strong>Email:</strong> {user?.email}
            </Typography>
            <Typography>
              <strong>Role:</strong> {user?.role}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard; 