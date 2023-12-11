import { Link } from "react-router-dom"
import '../styleSheets/homePage.css'
import heroProductPic1 from '../assets/imgs/pexels-philip-boakye-2614384.jpg'
import arrowPic from '../assets/imgs/arrow-right-svgrepo-com.svg'


function HomePage(){
    return (
        <>
            <div className="homePageStyle">
                    <div className="homePage-top">
                        <div className="heroDiv">
                        {
                            heroProductPic1? (<img src={heroProductPic1} alt="product photo"></img>):(<p>Loading...</p>)
                        }
                            
                        </div>
                        <div className="homePage-top-contents">
                            <div className="hm-top-cnts-heading">
                                <h2 className="hm-top-cnts-heading-txt1">Seek Shopping Haven,</h2>
                                <h2 className="hm-top-cnts-heading-txt2">Discover Endless Choices,</h2>
                                <h2 className="hm-top-cnts-heading-txt3">Experience Seamless Joy.</h2>
                            </div>
                            <p>Explore our shopping haven: curated delights, endless choices, seamless joy.<br></br> Your sanctuary for delightful shopping experiences, ensuring satisfaction with every click.<br></br> Discover the perfect blend of variety and convenience in your journey through our haven.</p>
                            <div className="call-to-action-part">
                                <img src={arrowPic} alt="arrow pic" width={100} height={100}></img>
                                <div className="shop-btn-div">
                                    <Link className="shop-btn" to="shop">Start Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="home-carousel">
                            <div className="home-carousel-slide"><h2>Shop the Look</h2><h2>Shop the Look</h2></div>
                            <div className="home-carousel-slide"><h2>Shop the Look</h2><h2>Shop the Look</h2></div>
                        </div>
                        <div>
                            <div className="hmPg-container">
                                <div className="hmPg-container-img_btn">
                                    <div className="fakeStoreApi-container">
                                        <img className="fakeStoreApi-img" src="https://fakestoreapi.com/icons/logo.png" alt="fakeStoreapi image" width={350}></img>
                                        <p className="fakeStoreApi-txt">Developed with the help of fakestoreapi</p>
                                    </div>
                                    <div className="shop-btn-div">
                                        <Link className="shop-btn" to="shop">meet the new age</Link>
                                    </div>
                                </div>
                                <div className="hmPg-container-text">
                                    <h2>Tech is the <span className="bold-text">new age.</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nisl nec dictum vehicula, sapien metus convallis nisi, in tristique velit nulla tempor tortor. Ut vitae orci id purus efficitur viverra quis ut purus. Ut posuere vel augue a aliquet. Integer at erat lobortis, bibendum ex vitae, volutpat eros. Suspendisse euismod placerat nisi quis maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat pharetra malesuada. Cras non nisl imperdiet, posuere nunc quis, lobortis dui. Fusce mollis bibendum libero in ultrices. Nulla vulputate ullamcorper diam eget eleifend. Nulla id vehicula quam. Suspendisse dui justo, aliquam finibus lacinia eu, porta eget turpis.</p>
                                    <p>Quisque condimentum tempor cursus. Nulla nunc massa, porta a venenatis in, ornare at arcu. Nam pharetra, dolor id suscipit semper, nisl tellus lacinia ligula, et sollicitudin nibh lorem eget metus. Donec in aliquam tellus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
        </>
    )
}



export default HomePage;