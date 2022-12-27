import { createContext, ReactNode, useState } from "react";

interface iProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPrice: string;
}

interface CartContextData {
  cartItems: iProduct[];
  addToCart: (product: iProduct) => void;
  checkIfItemAlreadyExists: (productId: string) => boolean;
}

interface CartContextProdiverProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProdiver({ children }: CartContextProdiverProps) {
  const [cartItems, setCartItems] = useState<iProduct[]>([]);

  function addToCart(product: iProduct) {
    setCartItems((prevState) => [...prevState, product]);
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, checkIfItemAlreadyExists }}>
      {children}
    </CartContext.Provider>
  );
}
