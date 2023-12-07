import '../styleSheets/Shop.css'
import PropTypes from 'prop-types';


const Shop = (props) =>{
    const setCart = props.setCart;
    const cart = props.cart;
    const toggleCart = props.toggleCart;
    const setToggleCart = props.setToggleCart;
    const setRenderCart = props.setRenderCart;
    const respose = props.response;
    const subTotal = props.subTotal;
    const setSubTotal  = props.setSubTotal;


    

    function handleClick(index,itemPrice){
        
            setCart(cart+1);
            setRenderCart((prevCounts => ({
                ...prevCounts,
                [index]: (prevCounts[index] || 0)+1,
              })))
              setToggleCart(!toggleCart);
            setSubTotal(itemPrice);
            
       
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
                                                <button onClick={()=>{handleClick(index,subTotal+item.price)}}>Add to Cart</button>
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
    setCart: PropTypes.func,
    toggleCart: PropTypes.bool,
    setToggleCart: PropTypes.func,
    renderCart: PropTypes.object,
    setRenderCart: PropTypes.func,
    response: PropTypes.object,
    subTotal: PropTypes.number,
    setSubTotal: PropTypes.func,

  };

export default Shop;