import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import aboutus from "@/assets/about-us-image-3.png";

const AboutUs = () => {
  return (
    <Box
      sx={{
        width: "93%",
        background: "linear-gradient(to right, #767473, #767473)",
        height: { xs: "auto", md: "55vh" },
        margin: "2rem auto",
        borderRadius: "20px",
        padding: { xs: "2rem", md: "3rem" },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ color: "white" }}
            variant="h3"
            textAlign={{ xs: "center", md: "left" }}
          >
            About Us
          </Typography>
          <Typography
            component="p"
            sx={{
              marginTop: "10px",
              color: "white",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            rerum cumque? Eveniet asperiores velit fuga neque aspernatur eaque
            nihil nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam rerum possimus recusandae?
          </Typography>
          <Box textAlign={{ xs: "center", md: "left" }}>
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
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <Box
            component="img"
            src={aboutus}
            alt="About Us image"
            sx={{
              width: { xs: "90%", sm: "70%", md: "50%" },

              maxHeight: "480px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
