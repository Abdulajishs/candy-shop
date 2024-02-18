import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CandyList = (props) => {
    const { item } = props;
    console.log(item);
    const cntx = useContext(CartContext);

    const addOneItemToCart = (event) => {
        event.preventDefault();
        cntx.addItem({ ...item, quantity: 1 })
    }

    const addTwoItemToCart = (event) => {
        event.preventDefault();
        cntx.addItem({ ...item, quantity: 2 })
    }
    const addThreeItemToCart = (event) => {
        event.preventDefault();
        cntx.addItem({ ...item, quantity: 3 })
    }
    return (
        <li key={item.id}>
            <span>{item.name}</span> -
            <span>{item.description}</span> -
            <span>{item.price}</span> -
            <button onClick={addOneItemToCart}>Buy 1</button> -
            <button onClick={addTwoItemToCart}>Buy 2</button> -
            <button onClick={addThreeItemToCart}>Buy 3</button>
        </li >
    )
}

export default CandyList;