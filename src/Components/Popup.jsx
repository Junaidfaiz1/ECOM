import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { addToCart, removeFromCart } from "../Redex-toolkit/AddTOCart";
import { IconButton } from "@mui/material";

const Popup = ({ handleClose, open }) => {
  const product = useSelector((state) => state.cart.cart);
  const totalprice = useSelector((state) => state.cart.totalprice);
  const despatch = useDispatch();
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
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Typography>Quantity: </Typography>
                    <IconButton
                      color="primary"
                      onClick={() => despatch(addToCart(item))}
                      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
                    >
                      <AddCircleOutlineIcon fontSize="medium" />
                    </IconButton>

                    <Typography>{item.quantity}</Typography>
                    <IconButton
                      color="primary"
                      onClick={() => despatch(removeFromCart(item.id))}
                      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
                    >
                      <RemoveIcon fontSize="medium" />
                    </IconButton>
                  </Box>
                  <Typography>
                    <strong>Total:{item.price * item.quantity}</strong> $
                  </Typography>
                </Box>
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
