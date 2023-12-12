/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import '../styleSheets/navBar.css'
import PropTypes from 'prop-types';
import cartIcon from '../assets/imgs/icons8-cart-64.png';




const NavBar = (props) => {
    const cart = props.cart;
    const toggleCart = props.toggleCart;
    const setToggleCart = props.setToggleCart;


    return(
        <>
            <nav className="navBar">
                <div className="navbarLogo"><Link to="/">Logo</Link></div>
                <ul className="navBar-l-cont navBar-cont"> 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                </ul>
                <div onClick={() => { setToggleCart(!toggleCart)}} className="navBar-r-cont navBar-cont ">
                    <img src={cartIcon} alt="Shopping Cart"></img>
                    <strong className="cart-alert">{cart}</strong>
                </div>
            </nav>
        </>
    )
}



NavBar.propTypes = {
    cart: PropTypes.number,
    toggleCart: PropTypes.bool,
    setToggleCart: PropTypes.func,
};

export default NavBar;