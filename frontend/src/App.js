import './App.css';
import { Navbar }  from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
// import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Vende } from './Pages/Vende';
import { QuienSomos } from './Pages/QuienSomos';
import { Ayuda } from './Pages/Ayuda'
import { Footer } from './Components/Footer/Footer'
import { ShopCategory } from './Pages/ShopCategory'
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vende" element={<Vende category='vende' />} />
          <Route path="/quien" element={<QuienSomos category='quien' />} />
          <Route path="/ayuda" element={<Ayuda category='ayuda' />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<LoginSignup/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category1" element={<ShopCategory category='category1' />} />
          {/* <Route path="/category2" element={<ShopCategory category='category2' />} />
          <Route path="/category3" element={<ShopCategory category='category3' />} />
          <Route path="/category4" element={<ShopCategory category='category4' />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
