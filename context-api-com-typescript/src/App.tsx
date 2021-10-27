import "./App.css";
import Card from "./Components/Card";
import products from "./Components/ProductList";
import { useCart } from "./Providers/Cart";

function App() {
  const { cart } = useCart();

  return (
    <div className="RootDiv">
      <h1>Lista de Itens</h1>
      <div className="App">
        {products.map((elt, index) => {
          return <Card key={index} product={elt} />;
        })}
      </div>
      <h1>Carrinho</h1>
      <div className="App">
        {cart.map((elt, index) => {
          return <Card key={index} product={elt} cartCheck={true} />;
        })}
      </div>
    </div>
  );
}

export default App;
