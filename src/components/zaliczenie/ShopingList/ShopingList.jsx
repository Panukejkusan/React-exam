import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

const ShopingList = ({ shopingList, removeProduct }) => {
  const handleClick = (e, index) => {
    e.preventDefault();
    if (e.type === "contextmenu") {
      removeProduct(index);
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        <ul>
          {shopingList.map((item, index) => (
            <li key={index} onContextMenu={(e) => handleClick(e, index)}>
              {item.nazwa}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

// const ShoppingList = ({ shoppingList }) => {
//   return (
//     <div>
//       <h2>Shopping List</h2>
//       <ul>
//         {shoppingList.map((item, index) => (
//           <li key={index}>{item.nazwa}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default ShopingList;
