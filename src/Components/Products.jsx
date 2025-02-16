import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
const productsData = {
  Electronics: [
    {
      id: 1,
      name: "Smartphone",
      description: "Latest 5G smartphone",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Laptop",
      description: "Powerful gaming laptop",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Track fitness and notifications",
      image: "https://via.placeholder.com/150",
      rating: 4.3,
    },
  ],
  Clothing: [
    {
      id: 4,
      name: "T-Shirt",
      description: "Comfortable cotton t-shirt",
      image: "https://via.placeholder.com/150",
      rating: 4.2,
    },
    {
      id: 5,
      name: "Jeans",
      description: "Stylish blue denim jeans",
      image: "https://via.placeholder.com/150",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Jacket",
      description: "Warm winter jacket",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
    },
  ],
  "Home Appliances": [
    {
      id: 7,
      name: "Refrigerator",
      description: "Energy-efficient refrigerator",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 8,
      name: "Microwave",
      description: "Compact microwave oven",
      image: "https://via.placeholder.com/150",
      rating: 4.4,
    },
    {
      id: 9,
      name: "Washing Machine",
      description: "Fully automatic washing machine",
      image: "https://via.placeholder.com/150",
      rating: 4.6,
    },
  ],
};
const Products = () => {
  const [selectedcategory, Setselectedcategory] = useState();
  return (
    <Container maxWidth="md">
      <Typography
        varient="h2"
        align="center"
        sx={{ marginBottom: "1.5rem", marginTop: "1rem", fontWeight: 600 }}
      >
        Featured Products
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={6}
        marginBottom={3}
      >
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#E67E22",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#23512a",
              color: "white",
            },
            "&:focus": {
              backgroundColor: "#1a2e13",
              color: "#dc11f2",
            },
          }}
        >
          All
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#E67E22",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#23512a",
              color: "white",
            },
            "&:focus": {
              backgroundColor: "#1a2e13",
              color: "#dc11f2",
            },
          }}
        >
          All
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#E67E22",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#23512a",
              color: "white",
            },
            "&:focus": {
              backgroundColor: "#1a2e13",
              color: "#dc11f2",
            },
          }}
        >
          All
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#E67E22",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#23512a",
              color: "white",
            },
            "&:focus": {
              backgroundColor: "#1a2e13",
              color: "#dc11f2",
            },
          }}
        >
          All
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {/* Product 1 */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/150"
              alt="Smartphone"
            />
            <CardContent>
              <Typography variant="h6" align="center" fontWeight="bold">
                Smartphone
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Latest 5G smartphone
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                align="center"
                sx={{ marginTop: 1, fontWeight: "bold" }}
              >
                $699
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={1}
              >
                <Rating value={4.5} precision={0.1} readOnly />
              </Box>
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Product 2 */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/150"
              alt="Laptop"
            />
            <CardContent>
              <Typography variant="h6" align="center" fontWeight="bold">
                Laptop
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Powerful gaming laptop
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                align="center"
                sx={{ marginTop: 1, fontWeight: "bold" }}
              >
                $1299
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={1}
              >
                <Rating value={4.7} precision={0.1} readOnly />
              </Box>
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Product 3 */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "5px 5px 15px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/150"
              alt="Smartwatch"
            />
            <CardContent>
              <Typography variant="h6" align="center" fontWeight="bold">
                Smartwatch
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Track fitness and notifications
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                align="center"
                sx={{ marginTop: 1, fontWeight: "bold" }}
              >
                $199
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={1}
              >
                <Rating value={4.3} precision={0.1} readOnly />
              </Box>
              <Box display="flex" justifyContent="center" marginTop={2}>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
