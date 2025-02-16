import React from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import Posterimg from "../assets/about-us-image-3.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const Home = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#1a2e13",
        position: "relative",
      }}
    >
      {/* Background Box */}
      <Box
        sx={{
          position: "absolute",
          width: "55%",
          height: "90%",
          maxHeight: "100vh",
          backgroundColor: "#23512a",
          zIndex: 0, // Background stays at the lowest level
        }}
      />

      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none", zIndex: 2 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ color: "white" }}>
            Ecom
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Shop</Button>
          </Box>
          <Button variant="contained" sx={{ backgroundColor: "#E67E22" }}>
            Shop Now
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 8,
          position: "relative",
          zIndex: 1, // Bring hero section to the front
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "white",
                lineHeight: 1.2,
                mb: 3,
                fontWeight: 600,
              }}
            >
              Ultimate Shopping Now
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                mb: 4,
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              Discover radiant skin with our premium skincare products.
              Experience the power of natural ingredients combined with
              cutting-edge science for a revitalized and rejuvenated complexion.
              Elevate your skincare routine and unveil your inner glow with our
              trusted formulas.
            </Typography>
          </Grid>
          {/* Hero Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Posterimg}
              alt="About Us"
              sx={{
                width: "100%",
                maxHeight: "480px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Box
        item
        display="flex"
        justifyContent="center"
        alignItems="space-between"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          marginTop: "1rem",
          height: "3rem",
          width: "100%",
        }}
      >
        <Box
          item
          display="flex"
          justifyContent="center"
          gap={6}
          sx={{
            color: "white",
            
          }}
        >
          <Button variant="outline" startIcon={<LocalShippingIcon />}>
            Free Shipping
          </Button>
          <Button variant="outline" startIcon={<SupportAgentIcon />}>
            24h Customers Support
          </Button>
          <Button variant="outline" startIcon={<DeliveryDiningIcon />}>
            Fast Delivery
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
