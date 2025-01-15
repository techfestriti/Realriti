import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import "./Admin.css";

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (role) => {
    if (!username || !password) {
      setError(true);
    } else {
      console.log(`${role} logged in`);
    }
  };

  return (
    <form className="form" style={{ textAlign: 'center', padding: '20px' }}>
      <br />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 100, color: '#e7fbf7' }} />
        <h1>LOGIN</h1>
        <TextField
          variant="outlined"
          label="Username"
          error={error && !username}
          helperText={error && !username ? "Username is required" : ""}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            width: '300px',
            marginTop: '10px',
            '& .MuiInputBase-root': {
              height: '50px',
            },
          }}
        />
      </Box>
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        error={error && !password}
        helperText={error && !password ? "Password is required" : ""}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          width: '300px',
          marginTop: '10px',
          '& .MuiInputBase-root': {
            height: '50px',
          },
        }}
      />
      <div style={{ display: 'inline-flex', gap: '10px', marginTop: '50px' }}>
        <Button
          variant="contained"
          onClick={() => handleLogin('Admin')}
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
          onClick={() => handleLogin('Coordinator')}
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
    </form>
  );
};

export default Admin;
