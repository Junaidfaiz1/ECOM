import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: "auto",
        marginTop: "4rem",
        paddingY: "3rem",
        boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {/* Brand Info Section */}
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <Typography
            variant="h3"
            sx={{ marginTop: "1rem", paddingLeft: "2rem" }}
          >
            Starla
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", paddingLeft: "2rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil
            a vel? Porro doloribus, eius similique veritatis sint sit inventore.
          </Typography>
        </Grid>

        {/* Our Company Section */}
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Our Company
          </Typography>
          <List dense>
            {["Home", "About Us", "Services", "Contact Us"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemText>
                  <Link
                    to={`/${text.toLowerCase().replace(" ", "-")}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {text}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Policy Section (Fixed for Mobile View) */}
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" }, // Centered on mobile, left-aligned on larger screens
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Policy
          </Typography>
          <List dense sx={{ width: "100%" }}>
            {["Privacy Policy", "Terms & Conditions"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "flex-start" }, // Center on mobile, left-align on larger screens
                  }}
                >
                  <Link
                    to={`/${text.toLowerCase().replace(" ", "-")}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {text}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Offices Section */}
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Offices
          </Typography>
          <Typography
            variant="body1"
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
