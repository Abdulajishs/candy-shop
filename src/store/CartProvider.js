import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider =(props)=>{
    const [enteredItem,setEnteredItem] = useState([])

    const addItemHandler = (item)=>{
        const existingItemIndex = enteredItem.findIndex(ele=> ele.id === item.id);
        if(existingItemIndex !== -1){
            const updateItem = [...enteredItem]
            updateItem[existingItemIndex].quantity = Number(updateItem[existingItemIndex].quantity) + Number(item.quantity)
            setEnteredItem(updateItem)
        }else{
            setEnteredItem((prevItem)=> [...prevItem,item])
        }
    }

    const removeItemHandler =()=>{}


    const cartContext = {
        items :enteredItem,
        addItem : addItemHandler,
        removeItem : removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {console.log(cartContext)}
        {props.children}
        </CartContext.Provider>
}

export default CartProvider;