import React from "react";
import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

const ProductList = ({ products, addProduct }) => {
  console.log(products);
  const handleTransfer = (index) => {
    const product = products[index];
    onTransfer(product);
  };
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index} onClick={() => addProduct(product)}>
          {product.nazwa}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

// function ProductsList() {
//   return (
//     <div className={commonColumnsStyles.App}>
//       <header className={commonColumnsStyles.AppHeader}>
//         <p>Products list</p>
//         <ul>
//         {produkty.map(product => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//       </header>
//     </div>
//   );
// }
