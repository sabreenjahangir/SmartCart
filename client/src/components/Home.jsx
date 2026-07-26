import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Footer from "./Footer";

function Home() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar cart={cart} />

      <h2>🛒 SmartCart</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <ProductList
        cart={cart}
        setCart={setCart}
        search={search}
      />
      

      <Footer />
    </>
  );
}

export default Home;