import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Producto from './components/Producto';
import Footer from './components/Footer';
import Error404 from "./components/Error404";
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from "./components/Checkout";

function App() {
  return (
  <CartContextProvider>
  <div>
    <BrowserRouter> 
      <div className="container">
      <div className="row">
      <div className="col-md-12">
        <Navbar />
        <div className="producto row">
        <Producto />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
          </div>
          </div>
          <section>
          <div className="footer" src>
        <Footer />
          </div>
          </section>
          </div>
        </div>
    </BrowserRouter>
  </div>
  </CartContextProvider>
  );
}

export default App;
