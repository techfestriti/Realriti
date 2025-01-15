import React from 'react';
import { Button, TextField, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Addproduct = () => {
  return (
    <div className="form" style={{ textAlign: 'center', padding: '20px' }}>
      <br />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <AccountCircleIcon sx={{ fontSize: 100, color: '#e7fbf7' }} />
        <h1>LOGIN</h1>
        <TextField
          variant="outlined"
          label="Username"
          sx={{
            width: '300px',
            marginTop: '10px',
            '& .MuiInputBase-root': {
              height: '50px', // Adjust the height
            },
          }}
        />
      </Box>
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        sx={{
          width: '300px',
          marginTop: '10px',
          '& .MuiInputBase-root': {
            height: '50px', // Adjust the height
          },
        }}
      />
      <div style={{ display: 'inline-flex', gap: '10px', marginTop: '50px' }}>
        <Button
          variant="contained"
          sx={{
            width: '120px',
            height: '40px',
            backgroundColor: '#08a765',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#4CAF50',
            },
          }}
        >
          Admin
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '120px',
            height: '40px',
            backgroundColor: '#08a765',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#4CAF50',
            },
          }}
        >
          Coordinator
        </Button>
      </div>
    </div>
  );
};

export default Addproduct;