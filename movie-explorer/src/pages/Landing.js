import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const images = [
  '/assets/image1.jpeg',
  '/assets/image2.jpeg',
  '/assets/image3.jpeg',
  '/assets/image4.jpeg',
];

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        position: 'relative',
        overflow: 'auto',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 4, py: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e50914' }}>
          MOVIEX
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#e50914',
            color: '#fff',
            fontWeight: 'bold',
            px: 3,
            borderRadius: 1,
            '&:hover': { backgroundColor: '#f40612' }
          }}
        >
          Sign In
        </Button>
      </Box>

      <Box
        sx={{
          height: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
          zIndex: 2,
          backdropFilter: 'brightness(0.8)', background: 'linear-gradient(to bottom, rgba(10,10,25,0.8), rgba(0,0,0,0.9))'
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Unlimited Movies, TV Shows & More
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Box sx={{ display: 'flex', mt: 2, gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <TextField
            variant="filled"
            label="Email address"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              minWidth: 250,
              input: { color: '#000' }
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#e50914',
              color: '#fff',
              '&:hover': { backgroundColor: '#f40612' },
              height: 56,
              px: 4,
              fontWeight: 'bold'
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              cursor: 'pointer',
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: i === index ? '#e50914' : '#bbb',
              transition: 'background-color 0.3s ease-in-out'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Landing;
