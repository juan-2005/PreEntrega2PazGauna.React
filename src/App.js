
import './App.css';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import Item from './Components/Item/Item';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNavbar from './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';

function App() {
  
  return (
    <BrowserRouter className="App">
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:itemId' element={<Item/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


