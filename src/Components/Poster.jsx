import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import posterimg from "../assets/EcommerceLogos.jpg"
const Poster = () => {
  return (
    <>
    <div>

    <Box 
      sx={{ 
        width: '100%', 
        height: '400px', 
        backgroundImage: `url(${posterimg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold'
        
      }}
    >
      <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold' }}>
        Welcome to Our Website!
      </Typography>
    </Box>
  
    </div>
    </>
  );
};

export default Poster;
