import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  toggleFavourite,
} from "../Redex-toolkit/AddTOCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Rating,
  IconButton,
  Container,
} from "@mui/material";

const BestProducts = () => {
  const dispatch = useDispatch();
  const FavProducts = useSelector((state) => state.cart.Favourites);
  const cart = useSelector((state) => state.cart.cart);
  const cartid = cart.map((item) => item.id);
  return (
    <Container sx={{ marginTop: "3rem" }}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ marginBottom: "3rem" }}
        gutterBottom
      >
        Favourite Products
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {FavProducts.map((product) => (
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
                  <IconButton
                    onClick={() => dispatch(toggleFavourite(product))}
                    sx={{ marginLeft: "2px", color: "#E67E22" }}
                  >
                    {FavProducts.includes(product.id) ? (
                      <FavoriteBorderIcon />
                    ) : (
                      <FavoriteIcon />
                    )}
                  </IconButton>
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
                  {cartid.includes(product.id) ? (
                    <Box display="flex" justifyContent="center" marginTop={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        Remove From Cart
                      </Button>
                    </Box>
                  ) : (
                    <Box display="flex" justifyContent="center" marginTop={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestProducts;
