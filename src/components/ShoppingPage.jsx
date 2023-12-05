import '../styleSheets/Shop.css'
import { useState } from 'react';
import FetchProducts from '../customHooks/loadProducts';


const Shop = () =>{
    const [respose, setResponse] = useState(null);
    FetchProducts('https://fakestoreapi.com/products?limit=50', setResponse)
    console.log(respose)


    return(
        <>
        <h1>Shop is working</h1>
        <div className='item-listing'>
            {respose? (
                    <div className='shop-items-container'>
                        {
                            respose.map((item)=>{
                                return (
                                    <div className='shop-items' key={item.id}>
                                        <div className='items-img-container'><img src={item.image}></img></div>
                                        <div className='item-details'>
                                            <strong>{item.title}<br></br></strong>
                                            <p>rating: {item.rating.rate}</p>
                                            <p>{item.description}</p>
                                            <div >
                                                <p className='item-price'>${item.price}</p>
                                                <button>Add to Cart</button>
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

export default Shop;