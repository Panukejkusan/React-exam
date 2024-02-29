import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import produkty from "./common/consts/produkty.js";
import React, { useState } from "react";

function App() {
  const [shopingList, setShopingList] = useState([]);

  const addProduct = (product) => {
    setShopingList([...shopingList, product]);
  };

  const removeProduct = (index) => {
    const products = [...shopingList];
    products.splice(index, 1);
    setShopingList(products);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <div>
          <h1>List of Products</h1>
          <ProductList products={produkty} addProduct={addProduct} />
        </div>
        <ShopingList shopingList={shopingList} removeProduct={removeProduct} />
      </div>
    </div>
  );
}

// const App = () => {
//   const [productList, setProductList] = useState([
//     // ... (your product data)
//   ]);

//   const [shoppingList, setShoppingList] = useState([]);

//   const handleTransfer = (product) => {
//     // Update the state: Remove from productList, add to shoppingList
//     setProductList((prevProductList) => {
//       const updatedProductList = prevProductList.filter((p) => p !== product);
//       return updatedProductList;
//     });

//     setShoppingList((prevShoppingList) => [...prevShoppingList, product]);
//   };

//   return (
//     <div>
//       <ProductList productList={productList} onTransfer={handleTransfer} />
//       <ShoppingList shoppingList={shoppingList} />
//     </div>
//   );
// };

export default App;
