import NavBar from "./navBar";
import { Route,Routes } from 'react-router-dom';
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage.jsx";
import Shop from './ShoppingPage.jsx';

const App = () => {
  return (
  
  <>
      <NavBar />
    <div>
      <Routes>        
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/shop"  element={<Shop />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
    
  </>
    
  );
};

export default App;