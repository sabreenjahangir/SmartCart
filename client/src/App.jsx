import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [cart, setCart] = useState([]);
const [search, setSearch] = useState("");
  return (
    <BrowserRouter>

      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
  path="/products"
  element={
    <ProductsPage
      cart={cart}
      setCart={setCart}
      search={search}
      setSearch={setSearch}
    />
  }
/>
<Route
  path="/product/:id"
  element={<ProductDetails />}
/>
        <Route
  path="/cart"
  element={
    <CartPage
      cart={cart}
      setCart={setCart}
    />
  }
/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;