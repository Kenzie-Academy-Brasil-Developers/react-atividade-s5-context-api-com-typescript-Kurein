import { createContext, useContext, useState, ReactNode } from "react";

interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
}

interface CartProps {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
