import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';

function App() {
  const prods = [
    {id:1, name:"Apple", price:100},
    {id:2, name:"Banana", price:200},
    {id:3, name:"Grapes", price:300},
  ];
  return (
    <div className="App">
      <Products products={prods} />
    </div>
  );
}

export default App;
