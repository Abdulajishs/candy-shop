import { useContext } from "react";
import Modal from "../../UI/Modal"
import CartContext from "../../store/cart-context";

const Cart = (props) => {

    const cartCntx = useContext(CartContext);
    const total = cartCntx.items.reduce((acc,curr) => acc+ curr.quantity*curr.price,0)
    return (
        <Modal onClose={props.onClose}>
            <ul>
            {cartCntx.items.map((item) => (
                <li>
                    <h3>{item.name}</h3>
                    <div>x{item.quantity}</div>
                    <div>Rs.{item.price}</div>
                </li>
            ))}
            </ul>
            <h3>Total Amount-{total}</h3>
            <button>Order</button>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    )
}

export default Cart;