import { Button } from "@mui/material";
import "./App.css";
import { react, lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Home = lazy(() => import("./Components/Home.jsx"));
const Products = lazy(() => import("./Components/Products.jsx"));
const Footer = lazy(() => import("./Components/Footer.jsx"));
const Testimonial = lazy(() => import("./Components/Testimonial.jsx"));
const Favorite = lazy(() => import("./Components/Favourite.jsx"));
const AboutUs = lazy(() => import("./Components/AboutUs.jsx"));

const Layout = () => {
  return (
    <>
      <Home />
      <Products />
      <Testimonial />
      <AboutUs />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Testimonial" element={<Testimonial />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Favourite" element={<Favorite />} />
            <Route />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
