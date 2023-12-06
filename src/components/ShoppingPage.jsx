import '../styleSheets/Shop.css'
import { useState } from 'react';
import FetchProducts from '../customHooks/loadProducts';
import PropTypes from 'prop-types';


const Shop = (props) =>{
    const [respose, setResponse] = useState(null);
    const setCart = props.setCart;
    const cart = props.cart;
    const setRenderCart = props.setRenderCart;
    FetchProducts('https://fakestoreapi.com/products?limit=50', setResponse);


    

    function handleClick(index){
        
            setCart(cart+1);
            setRenderCart((prevCounts => ({
                ...prevCounts,
                [index]: (prevCounts[index] || 0)+1,
              })))
            
       
    }


    return(
        <>
        <h1>Shop is working</h1>
        <div className='item-listing'>
            {respose? (
                    <div className='shop-items-container'>
                        {
                            respose.map((item,index)=>{
                                return (
                                    <div className='shop-items' key={item.id}>
                                        <div className='items-img-container'><img src={item.image}></img></div>
                                        <div className='item-details'>
                                            <strong>{item.title}<br></br></strong>
                                            <p>rating: {item.rating.rate}</p>
                                            <p>{item.description}</p>
                                            <div >
                                                <p className='item-price'>${item.price}</p>
                                                <button onClick={()=>{handleClick(index)}}>Add to Cart</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )})
                        }
                    </div>
                )
            : (<h2>Loading...</h2>)}
        </div>
        
            
            
        </>
    )
}

Shop.propTypes = {
    cart: PropTypes.number,
    setCart: PropTypes.function,
    renderCart: PropTypes.object,
    setRenderCart: PropTypes.function,
};

export default Shop;