import './App.css';
import Home from './pages/home';
import Headers from './components/Header'
import Footers from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);


  return (
    <div className="App">
      <Router>
        <ToastContainer theme='dark' position='top-center'/>
        <Headers cartItems={cartItems} />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>} />
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
          </Routes>
        </div>
      </Router>
      
      <Footers />
    </div>
  );
}

export default App;
