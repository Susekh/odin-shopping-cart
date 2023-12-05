import { Link } from "react-router-dom";
import '../styleSheets/navBar.css'

const NavBar = () => {
    return(
        <>
            <nav className="navBar">
                <ul className="navBar-l-cont navBar-cont"> 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                </ul>
                <ul className="navBar-r-cont navBar-cont ">
                    <li><div>Cart</div></li>
                    
                </ul>
            </nav>
        </>
    )
}

export default NavBar;