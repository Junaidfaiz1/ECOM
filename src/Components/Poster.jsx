import React from "react";
import { Box, Typography, Grid, Paper,ButtonBase } from "@mui/material";
import posterimg from "../assets/EcommerceLogos.jpg";
const categories = [
    { name: "Fashion", link: "/fashion" },
    { name: "Electronics", link: "/electronics" },
    { name: "Home & Living", link: "/home-living" }
  ];
const Poster = () => {
  return (
    <>
      {/* Poster Section */}
      <Box 
        sx={{ 
          width: '100%', 
          height: '400px', 
          backgroundImage: `url(${posterimg})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            color: 'white', 
            fontWeight: 'bold',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds readability
            padding: '10px', 
            borderRadius: '8px'
          }}
        >
          Welcome to Our Website!
        </Typography>
      </Box>

      {/* Grid Section */}




    <Grid 
      container 
      spacing={2} 
      sx={{ 
        marginTop: 2, 
        padding: 2, 
        backgroundColor: '#f50057', 
        position: 'sticky',
        top: 0, // Ensures it sticks at the top
        zIndex: 1000 // Keeps it above other content
      }}
    >
      {categories.map((category, index) => (
        <Grid item xs={4} key={index}>
          <ButtonBase 
            onClick={() => handleClick(category.link)} 
            sx={{ width: '100%' }}
          >
            <Paper 
              sx={{ 
                padding: 2, 
                textAlign: 'center', 
                fontWeight: 'bold', 
                width: '100%',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': { backgroundColor: '#d4004d', color: 'white' } 
              }}
            >
              {category.name}
            </Paper>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>



    </>
  );
};

export default Poster;
