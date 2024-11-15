import { useCookie } from "@/hooks/useCookie";
import {
  createContext,
  Dispatch,
  SetStateAction,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

type CartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  name: string;
  image: string;
  price: number;
};

type CartContextType = {
  cart: CartItem[];
  setCart: () => void;
  add: (product: CartItem) => void;
  remove: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  add: () => {},
  remove: () => {},
});

const CartProvider = ({ children }: CartProviderProps) => {
  const [value] = useCookie([], "cart");
  const [cart, setCart] = useState<CartItem[]>(value);
  
  useEffect(() => {
    setCart(value);
  }, [value]);

  const add = (product: CartItem) => {
    setCart((prev) => [...prev, product]);
  };

  const remove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
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
