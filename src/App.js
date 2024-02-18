import { useState } from "react";
import ItemForm from "./components/ProductInput/ItemForm";
import ListItem from "./components/ProductList/ListItem";
import Header from "./components/Header/Header";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";


function App() {
  const [listItem,setListItem] = useState([]);
  const [showCart,setShowcart] = useState(false);

  const addItemHandler= (id,name,description,price)=>{
    setListItem(prevListItem => {
      return [...prevListItem,{id,name,description,price}]
    })
  }

  const showCartHandler = () =>{
    setShowcart(true)
  }

  const hideCartHandler = () =>{
    setShowcart(false)
  }
  // console.log(listItem);
  return (
    <CartProvider>
       {showCart && <Cart onClose={hideCartHandler} /> } 
      <Header onShowCart={showCartHandler} />
      <ItemForm onAddItem={addItemHandler} />
      <ListItem items={listItem} />
    </CartProvider>
  );
}

export default App;
