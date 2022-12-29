import { createContext, ReactNode, useState } from "react";

export interface iProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPrice: string;
  defaultPriceId: string;
}

interface CartContextData {
  cartItems: iProduct[];
  cartTotal: number;
  addToCart: (product: iProduct) => void;
  removeFromCart: (productId: string) => void;
  checkIfItemAlreadyExists: (productId: string) => boolean;
}

interface CartContextProdiverProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProdiver({ children }: CartContextProdiverProps) {
  const [cartItems, setCartItems] = useState<iProduct[]>([]);

  const cartTotal = cartItems.reduce((acc, product) => {
    return (acc + product.numberPrice);
  }, 0);

  function addToCart(product: iProduct) {
    setCartItems((prevState) => [...prevState, product]);
  }

  function removeFromCart(productId: string) {
    setCartItems((prevState) =>
      prevState.filter((product) => product.id !== productId)
    );
  }

  function checkIfItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
        checkIfItemAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
