import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redex-toolkit/AddTOCart";
import {
  Typography,
  Box,
  Container,
  Button,
  Grid2,
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
      image:
        "data:image/jpeg;base64,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",
      rating: 4.5,
      price: 600,
    },
    {
      id: 2,
      name: "Laptop",
      description: "Powerful gaming laptop",
      image:
        "data:image/jpeg;base64,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",
      rating: 4.7,
      price: 1200,
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Track fitness and notifications",
      image: "data:image/jpeg;base64,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",
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

      {/* Product Grid2 */}
      <Grid2 container spacing={3} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid2 item size={{md:3, xs: 6 }} key={product.id}>
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
                <Box display="flex" justifyContent="center" marginTop={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => despatch(addToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Products;
