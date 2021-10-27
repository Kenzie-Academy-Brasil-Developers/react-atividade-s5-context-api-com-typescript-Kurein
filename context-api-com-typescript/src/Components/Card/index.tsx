import { useCart } from "../../Providers/Cart";
import "./styles.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CardData {
  product: Product;
  cartCheck?: boolean;
}

const Card = ({ product, cartCheck }: CardData) => {
  const { addProduct, deleteProduct } = useCart();

  const { title, description, price, image } = product;

  return (
    <div className="CardDiv">
      <h2>{title}</h2>
      <div className="CardDiv__separation">
        <img src={`${image}`} alt={title} />
        <div className="CardDiv__info">
          <h2>{`R$${price}`}</h2>
          <p>{description}</p>
          <button
            onClick={() => {
              if (cartCheck) {
                deleteProduct(product);
              } else {
                addProduct(product);
              }
            }}
          >
            {cartCheck ? "Remover do Carrinho" : "Adicionar ao Carrinho"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
