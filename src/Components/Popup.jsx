import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { removeFromCart } from "../Redex-toolkit/AddTOCart";

const Popup = ({ handleClose, open }) => {
  const product = useSelector((state) => state.cart.cart);
  const totalprice = useSelector((state) => state.cart.totalprice);
  const dispatch = useDispatch();
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Review Your Cart"}</DialogTitle>
      {product.map((item, index) => (
        <Box key={index}>
          <DialogContent>
            <Card variant="outlined">
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>Price: ${item.price}</Typography>
                  <Typography>Quantity: {item.quantity}</Typography>
                  <Typography>
                    <strong>Total:{item.price * item.quantity}</strong> $
                  </Typography>
                </Box>
                <IconButton
                  color="error"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </IconButton>
              </CardContent>
            </Card>
          </DialogContent>
        </Box>
      ))}
      <Typography variant="h5">
        Total Price: <strong>${totalprice}</strong>
      </Typography>
      <DialogActions>
        <Button onClick={handleClose}>Cancle Order</Button>
        <Button onClick={handleClose} autoFocus>
          Order Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
