import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: "45vh",
        
        marginTop: "4rem",

        paddingY: "3rem",
        boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Grid container>
        <Grid
          item
          size={{ md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography variant="h3" sx={{ marginTop: "1rem", paddingLeft: "2rem" }}>Starla</Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", paddingLeft: "2rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil
            a vel? Porro doloribus, eius similique veritatis sint sit inventore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            maiores rerum repellat animi tempore ratione libero consequuntur
            voluptates magnam unde.
          </Typography>
        </Grid>
        <Grid
          item
          size={{ md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "10px" }}>
            Our Company
          </Typography>
          <Typography variant="button" href="#" sx={{ paddingY: "15px" }}>
            Home
          </Typography>
          <Typography variant="button" sx={{ paddingY: "15px" }}>
            About Us
          </Typography>
          <Typography variant="button" sx={{ paddingY: "15px" }}>
            Services
          </Typography>
          <Typography variant="button" sx={{ paddingY: "15px" }}>
            Contact Us
          </Typography>
        </Grid>
        <Grid
          item
          size={{ md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "10px" }}>
            Policy
          </Typography>
          <Typography variant="button" href="#" sx={{ paddingY: "15px" }}>
            Privacy Policy
          </Typography>
          <Typography variant="button" sx={{ paddingY: "15px" }}>
            Terms & Conditions
          </Typography>
        </Grid>
        <Grid
          item
          size={{ md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "10px" }}>
            Offices
          </Typography>
          <Typography
            variant="body1"
            href="#"
            sx={{ paddingRight: "15px", paddingY: "15px" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            neque.
          </Typography>
          <Typography variant="body1" sx={{ paddingY: "15px" }}>
            info@gmail.com
          </Typography>
          <Typography variant="body1" sx={{ paddingY: "15px" }}>
            +245423145
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
