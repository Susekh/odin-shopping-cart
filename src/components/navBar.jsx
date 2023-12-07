/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import '../styleSheets/navBar.css'
import PropTypes from 'prop-types';




const NavBar = (props) => {
    const cart = props.cart;
    const toggleCart = props.toggleCart;
    const setToggleCart = props.setToggleCart;
    

    return(
        <>
            <nav className="navBar">
                <ul className="navBar-l-cont navBar-cont"> 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                </ul>
                <ul className="navBar-r-cont navBar-cont ">
                    <li><div onClick={() => { setToggleCart(!toggleCart)}}>{cart}</div></li>
                </ul>
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