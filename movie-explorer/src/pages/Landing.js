import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const images = [
  '/assets/image1.jpg',
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
        overflow: 'hidden',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* Navbar */}
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

      {/* Hero Content */}
      <Box
        sx={{
          height: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
          zIndex: 2,
          backdropFilter: 'brightness(0.8)',
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

      {/* Navigation Dots – move into top section */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 110,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          zIndex: 3,
        }}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              cursor: 'pointer',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: i === index ? '#e50914' : '#ccc',
              opacity: 0.8,
              transition: 'background-color 0.3s ease-in-out'
            }}
          />
        ))}
      </Box>

      {/* Smooth Curve */}
      <Box component="div" sx={{ position: 'relative', width: '100%', lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{
            display: 'block',
            width: '100%',
            height: '100px',
          }}
        >
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ff004f" />
              <stop offset="100%" stopColor="#0b0c1b" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,224 C480,320 960,160 1440,240 L1440,320 L0,320 Z"
          />
        </svg>
      </Box>

      {/* Next Section */}
      <Box sx={{ backgroundColor: '#0b0c1b', py: 8, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" color="#fff">
          Trending Now
        </Typography>
        <Typography variant="body2" color="#aaa">
          This section comes after the curve!
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
