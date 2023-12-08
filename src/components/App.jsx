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
  
  const [response, setResponse] = useState(null);
  FetchProducts('https://fakestoreapi.com/products?limit=50', setResponse);
  const [toggleCart, setToggleCart] = useState(false);

  const [cart, setCart] = useState(0);

  const [renderCart, setRenderCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [contractBar, setContractBar] = useState(false);
  const keysArray = Object.keys(renderCart);

  

  function handleClickCart(key,renderCartVal, setCartVal,itemPrice){
    setRenderCart(prevCounts => ({
      ...prevCounts,
      [key]: renderCartVal,
    }));
    setCart(setCartVal);
    setSubTotal(parseFloat(itemPrice.toFixed(2)));
}

  function handleClickOverlay(){
    setContractBar(!contractBar);

    setTimeout(() => {
      setToggleCart(!toggleCart);
      setContractBar(false);
    }, 500);
  }

  return (
  
  <>
     <div className="shop-body">
        <div>
        <NavBar cart = {cart} toggleCart={toggleCart} setToggleCart = {setToggleCart} />
          <div>
            <Routes>        
              <Route path="/"  element={<HomePage/>}/>
              <Route path="/shop"  element={<Shop setCart = {setCart} 
              cart={cart} renderCart = {renderCart} setRenderCart = {setRenderCart} setToggleCart={setToggleCart}
               toggleCart={toggleCart} response={response} subTotal={subTotal} setSubTotal={setSubTotal} />}/>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
        
          {toggleCart && (
            <div>
                      <div onClick={handleClickOverlay} className={`shop-overlay ${contractBar ? 'shop-overlay-hide' : ''} `}></div>
                      <div className={`shop-cart-bar ${contractBar ? 'shopping-bar-hide' : ''}`}>
                        
                          <div>
                          <h1>Shopping Bag</h1>
                          {
                            keysArray.length ? (
                              keysArray.map((key, index) => (
                              (renderCart[key] >0 && (
                                      <div className="cart-item" key={index}>
                                          <div className="cart-item-img"><img src={response[key].image} alt={response[key].title}></img></div>
                                          <div className="cart-item-width">
                                            <p>{response[key].title}</p>
                                            <div className="cart-item-details">
                                                <strong>${response[key].price}</strong>
                                                <div className="cart-item-nums">
                                                  <button onClick={()=> {handleClickCart(key,renderCart[key]-1,cart-1,subTotal-response[key].price)}}>-</button>
                                                  <p>{renderCart[key]}</p>
                                                  <button onClick={()=> {handleClickCart(key,renderCart[key]+1,cart+1,subTotal+response[key].price)}}>+</button>
                                                </div>
                                            </div>
                                          </div>
                                      </div>
                                  ))
                              ))
                            ) :(
                              <p>Your shopping cart is empty.</p>
                            )

                          }
                          
                            
                        </div>
                        <div className="purchase-item">
                        <div className="subtotal-div">
                          <p>Subtotal: </p>
                          <p>${subTotal}</p>
                        </div>
                          <div className="checkout-btn-border">
                            <button className="checkout-btn">CHECKOUT</button>
                          </div>
                        </div>
                      
                          
                      </div>
                      
            </div>
            
                  )}
       
     </div>
  </>
    
  );
};

export default App;