import { logDOM } from '@testing-library/react';
import './App.css';
import Navbar from './components/Navbar';
import Producto from './components/Producto';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12">
<Navbar />
<ItemListContainer greeting={"no se encontraron Productos!"} />
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
);
}

export default App;
