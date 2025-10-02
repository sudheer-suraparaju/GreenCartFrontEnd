import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import ProductList from './Components/ProductList';

function App() {
 
  return (
    <div className="App">
      <ProductList />
      {/* <Products products={prods} /> */}
    </div>
  );
}

export default App;
