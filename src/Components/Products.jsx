import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redex-toolkit/AddTOCart";

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
      price: 600,
    },
    {
      id: 2,
      name: "Laptop",
      description: "Powerful gaming laptop",
      image: "https://via.placeholder.com/150",
      rating: 4.7,
      price: 1200,
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Track fitness and notifications",
      image: "https://via.placeholder.com/150",
      rating: 4.3,
      price: 400,
    },
  ],
  Clothing: [
    {
      id: 4,
      name: "T-Shirt",
      description: "Comfortable cotton t-shirt",
      image: "https://via.placeholder.com/150",
      rating: 4.2,
      price: 20,
    },
    {
      id: 5,
      name: "Jeans",
      description: "Stylish blue denim jeans",
      image: "https://via.placeholder.com/150",
      rating: 4.6,
      price: 50,
    },
    {
      id: 6,
      name: "Jacket",
      description: "Warm winter jacket",
      image: "https://via.placeholder.com/150",
      rating: 4.8,
      price: 100,
    },
  ],
  "Home Appliances": [
    {
      id: 7,
      name: "Refrigerator",
      description: "Energy-efficient refrigerator",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      price: 800,
    },
    {
      id: 8,
      name: "Microwave",
      description: "Compact microwave oven",
      image: "https://via.placeholder.com/150",
      rating: 4.4,
      price: 150,
    },
    {
      id: 9,
      name: "Washing Machine",
      description: "Fully automatic washing machine",
      image: "https://via.placeholder.com/150",
      rating: 4.6,
      price: 700,
    },
  ],
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const despatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartid = cart.map((item) => item.id);
  console.log(cartid);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? Object.values(productsData).flat()
      : productsData[selectedCategory] || [];

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "1.5rem", marginTop: "1rem", fontWeight: 600 }}
      >
        Featured Products
      </Typography>

      {/* Category Buttons */}
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        marginBottom={3}
        flexWrap="wrap"
      >
        {["All", ...Object.keys(productsData)].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => handleCategoryChange(category)}
            sx={{
              backgroundColor: selectedCategory === category ? "#E67E22" : "",
              color: selectedCategory === category ? "white" : "black",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#23512a",
                color: "white",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid item md={3} key={product.id}>
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
                height="160"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" align="center" fontWeight="bold">
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  align="center"
                  sx={{ marginTop: 1, fontWeight: "bold" }}
                >
                  ${product.price}
                </Typography>
                <Box display="flex" justifyContent="center" marginTop={1}>
                  <Rating value={product.rating} precision={0.1} readOnly />
                </Box>
                {cartid.includes(product.id) ? (
                  <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => despatch(removeFromCart(product.id))}
                    >
                      Remove From Cart
                    </Button>
                  </Box>
                ) : (
                  <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => despatch(addToCart(product))}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
