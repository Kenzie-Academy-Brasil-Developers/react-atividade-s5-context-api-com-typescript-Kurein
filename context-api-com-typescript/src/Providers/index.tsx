import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface ProvidersData {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersData) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
