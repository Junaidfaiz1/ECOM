import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, cleanCart } from "../Redex-toolkit/AddTOCart";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalprice);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h4">Shopping Cart</Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.name} - ${item.price} x ${item.quantity}`}
            />
            <Button
              color="error"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5">Total: ${totalPrice}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(cleanCart())}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
