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

const Popup = ({ handleClose, open=false }) => {
  const product = useSelector((state) => state.cart.cart);
  const totalprice = useSelector((state) => state.cart.totalprice);
  const despatch = useDispatch();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth="true"
      maxWidth="lg"
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
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "6px",
                  }}
                >
                  <Typography variant="h6" sx={{ marginRight: "6rem" }}>
                    {item.name}
                    {" : "}
                  </Typography>
                  <Typography variant="h6" sx={{ marginRight: "6rem" }}>
                    Price: ${item.price}
                  </Typography>
                  <Box display={"flex"} gap={1} sx={{ marginRight: "6rem" }}>
                    <Typography variant="h6">Quantity: </Typography>
                    <IconButton
                      color="primary"
                      onClick={() => despatch(addToCart(item))}
                      sx={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}
                    >
                      <AddCircleOutlineIcon fontSize="medium" />
                    </IconButton>

                    <Typography variant="h6" sx={{ paddingX: "10px" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      color="primary"
                      onClick={() => despatch(removeFromCart(item.id))}
                      sx={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}
                    >
                      <RemoveIcon fontSize="medium" />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" sx={{ marginRight: "6rem" }}>
                    Total:{item.price * item.quantity} $
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </DialogContent>
        </Box>
      ))}
      <Typography variant="h5" textAlign="center">
        Total Price: <strong>${totalprice}</strong>
      </Typography>
      <DialogActions>
        <Button onClick={handleClose}>Back</Button>
        <Button onClick={()=>{
          // TODO 
          const myFunc = ()=>{
            
            window.alert("hi");
          }         
           myFunc();
          handleClose();
        }} autoFocus>
          Order Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
