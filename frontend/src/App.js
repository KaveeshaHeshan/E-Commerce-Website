import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; // frist import 
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSigunp from './Pages/LoginSigunp';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/mens' element={<ShopCategory category="mens"/>} />
          <Route path='/Womens' element={<ShopCategory category="womens"/>} />
          <Route path='/Kids' element={<ShopCategory category="kids"/>} />
          <Route path=":productId" element={<Product />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/' element={<LoginSigunp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
