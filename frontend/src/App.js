import './App.css';
import { Navbar }  from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
// import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Vende } from './Pages/Vende';
import { QuienSomos } from './Pages/QuienSomos';
import { Ayuda } from './Pages/Ayuda'
import { Footer } from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/vende' element={<Vende category='vende'/>}/>
          <Route path='/quien' element={<QuienSomos category='quien'/>}/>
          <Route path='/ayuda' element={<Ayuda category='ayuda'/>}/>
           <Route path='product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route> 
          <Route path='login' element={<LoginSignup />}/> 
          <Route path='cart' element={<Cart />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  );
}

export default App;
