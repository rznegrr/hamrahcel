import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
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
  setCart: Dispatch<SetStateAction<CartItem[]>>;
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
  const [cart, setCart] = useState<CartItem[]>([]);

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
