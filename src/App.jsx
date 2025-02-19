import { Button } from "@mui/material";
import "./App.css";
import { react, lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Popup from "./Components/Popup.jsx";
const Home = lazy(() => import("./Components/Home.jsx"));
const Products = lazy(() => import("./Components/Products.jsx"));
const Cart = lazy(() => import("./Components/Cart.jsx"));
const Loader = lazy(() => import("./Components/Loader.jsx"));
const Checkout = lazy(() => import("./Components/Checkout.jsx"));
import { useDispatch } from "react-redux";
import { cleanCart } from "../src/Redex-toolkit/AddTOCart.js";
const Layout = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    dispatch(cleanCart());
  };
  return (
    <>
      <div
        className="checkout_button"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "10%",
          right: "10%",
          zIndex: "1000",
        }}
      >
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </div>
      <Home />
      <Products />
      <Cart />
      <Popup open={open} handleClose={handleClose} />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
