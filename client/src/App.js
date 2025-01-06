import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.jpg'
import women_banner from './Components/Assets/banner_women.jpg'
import kid_banner from './Components/Assets/banner_kid.jpg'
import Attributes from './Components/Attributes/Attributes';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category='men' banner={men_banner} />} />
          <Route path='/womens' element={<ShopCategory category='women' banner={women_banner}/>} />
          <Route path='/kids' element={<ShopCategory category='kid' banner={kid_banner} />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/reference' element={<Attributes></Attributes>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
