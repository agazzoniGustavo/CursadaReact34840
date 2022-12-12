import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Producto from './components/Producto';
import Footer from './components/Footer';
import Error404 from "./components/Error404";

function App() {
  return (
  <div>
    <BrowserRouter> 
        <div className="container">
          <div className="row">
            <div className="col-md-12">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>} />
        <Route path={"/category/:id"} element={<ItemListContainer/>} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={"*"} element={<Error404/>} />
      </Routes>
            </div>
          </div>
        <div className="producto row">
      <Producto />
          <section>
          <div className="footer" src>
      <Footer />
          </div>
          </section>
        </div>
      </div>
    </BrowserRouter>
</div>
);
}

export default App;
