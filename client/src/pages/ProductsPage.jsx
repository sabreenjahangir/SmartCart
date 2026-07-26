import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function ProductsPage(props) {
  return (
    <>
      <SearchBar
        search={props.search}
        setSearch={props.setSearch}
      />

      <ProductList
        cart={props.cart}
        setCart={props.setCart}
        search={props.search}
      />
    </>
  );
}

export default ProductsPage;