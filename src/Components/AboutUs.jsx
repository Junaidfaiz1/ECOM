import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import aboutus from "@/assets/about-us-image-3.png";
const AboutUs = () => {
  return (
    <Box
      sx={{
        width: "93%",
        background: "linear-gradient(to right, #767473, #767473)",
        height: "55vh",
        margin: "2rem",
        borderRadius: "20px",
      }}
    >
      <Grid
        container
        sx={{ padding: "3rem", fontSize: "bold", fontWeight: "5rem" }}
      >
        <Grid
          item
          size={{ md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography sx={{ color: "white" }} variant="h2">
            About Us
          </Typography>
          <Typography component="p" sx={{ marginTop: "5px", color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            rerum cumque? Eveniet asperiores velit fuga neque aspernatur eaque
            nihil nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam rerum possimus recusandae?
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#E67E22",
              marginTop: "2rem",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid
          item
          size={{ md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            marginBottom: "3rem",
          }}
        >
          <Box
            component="img"
            src={aboutus}
            alt="About Us image"
            sx={{
              width: "50%",
              maxHeight: "480px",
              objectFit: "cover",
              borderRadius: "10px",
              paddingBottom: "3rem",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
