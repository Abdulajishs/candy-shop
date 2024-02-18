import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderButton = (props)=>{

    const cntx = useContext(CartContext);
    
    const count = cntx.items.reduce((acc,curr)=> acc+ curr.quantity , 0)

    return<button onClick={props.showCart}>
        <h3>Your Cart - {count}</h3>
    </button>
}

export default HeaderButton;
