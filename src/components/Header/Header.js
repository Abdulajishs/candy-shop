import HeaderButton from "./HeaderButton";

const Header = (props) =>{
    return (
        <div>
        <h1>Candy Shop</h1>
        <HeaderButton showCart={props.onShowCart} />
        </div>
    )
}

export default Header;
