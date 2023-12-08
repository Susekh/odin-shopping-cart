import { Link } from "react-router-dom"
import '../styleSheets/homePage.css'


function HomePage(){
    return (
        <>
            <div className="homePageStyle">
                    <h1>This is a great website to shop!</h1>
                    <p>Click the button down below to start shopping.</p>
                    <nav>
                        <ul>
                        <li>
                            <Link to="shop">Start Shopping</Link>
                        </li>
                        </ul>
                    </nav>
             </div>
        </>
    )
}



export default HomePage;