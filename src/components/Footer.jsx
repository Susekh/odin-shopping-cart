import { Link } from 'react-router-dom';
import '../styleSheets/footer.css'


function Footer(){
    return(
        <>
            <div className="footerDiv">
                <div className='footerContents'>
                    <div className='footerLogo-txts'> 
                        <h2>LOGO</h2>
                        <div className='footerLogoTxts'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut in aut iusto. Alias, harum! Molestias blanditiis ipsa, atque eos nihil error
                                                quidem libero, amet, dolorum aliquam voluptatum autem recusandae architecto consequatur natus facilis obcaecati quae incidunt unde sit 
                                                assumenda modi officia cumque.
                            </p>
                        </div>
                    </div>
                    <div className='footerLinks'>
                        <h2>USEFUL LINKS</h2>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="shop">SHOP</Link></li>
                            <li><a href='https://github.com/Susekh'>GITHUB</a></li>
                            <li><a href='https://github.com/Susekh/odin-shopping-cart'>REPOSITORY</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;