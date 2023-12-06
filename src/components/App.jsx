import NavBar from "./navBar";
import { Route,Routes } from 'react-router-dom';
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage.jsx";
import Shop from './ShoppingPage.jsx';
import { useState } from "react";
import '../styleSheets/App.css'
import FetchProducts from "../customHooks/loadProducts.jsx";

// now make a state for cart that will take data from onlcik button from shopping page and then it will update the cart state by comparing the title and price it recieved from the add to cart button

// make state which will take the index with the number of times it gets clicked then render it in the shopping cart part



const App = () => {
  
  const [respose, setResponse] = useState(null);
  FetchProducts('https://fakestoreapi.com/products?limit=50', setResponse);
  const [toggleCart, setToggleCart] = useState(false);

  const [cart, setCart] = useState(0);

  const [renderCart, setRenderCart] = useState({});
  const keysArray = Object.keys(renderCart);
  return (
  
  <>
     <div className="shop-body">
        <div>
        <NavBar cart = {cart} toggleCart={toggleCart} setToggleCart = {setToggleCart} />
          <div>
            <Routes>        
              <Route path="/"  element={<HomePage/>}/>
              <Route path="/shop"  element={<Shop setCart = {setCart} cart={cart} renderCart = {renderCart} setRenderCart = {setRenderCart} />}/>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
        
          {toggleCart?(
            <div>
                      <div onClick={() => { setToggleCart(!toggleCart)}} className="shop-overlay"></div>
                      <div className="shop-cart-bar">
                          {
                              keysArray.map((key, index) => (
                              (
                                  <div key={index}>
                                      <img src={respose[key].image}></img>
                                      <p>{respose[key].title}<br></br>${respose[key].price}x{renderCart[key]}</p>
                                  </div>
                              )
                          ))
                          }
                      </div>
            </div>
            
                  ): ''}
       
     </div>
  </>
    
  );
};

export default App;