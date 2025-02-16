import "./App.css";
import { react, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./Components/Home.jsx"));
const Products = lazy(() => import("./Components/Products.jsx"));

const Layout = () => {
  return (
    <>
      <Home />
      <Products />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading</h2>}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
