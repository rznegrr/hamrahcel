import { useCookie } from "@/hooks/useCookie";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cart: any;
  add: (product: any) => void;
  remove: (id: number) => void;
  setCart: React.Dispatch<React.SetStateAction<any>>;
  // setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  add: () => {},
  remove: () => {},
  setCart: () => {},
});

const CartProvider = ({ children }: any) => {
  const [value] = useCookie([], "cart");
  const [cart, setCart] = useState(value);

  useEffect(() => {
    setCart(value);
  }, [value]);

  const add = (product: any) => {
    setCart((prev: any) => [...prev, product]);
  };

  const remove = (id: number) => {
    setCart((prev: any) => prev.filter((item: any) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, add, remove }}>
      {children}
    </CartContext.Provider>
  );
};

function useCartContext() {
  const context = useContext(CartContext);
  return context;
}

export { useCartContext, CartProvider };
