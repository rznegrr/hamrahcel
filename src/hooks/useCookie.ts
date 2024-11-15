import { useRef, useState, useEffect } from "react";
import Cookies from "js-cookie";

export function useCookie(initialState: any, key: string) {
  const valueRef = useRef(null);
  const [value, setValue] = useState(initialState);

  // effect to read the value from cookies
  useEffect(() => {
    const storedValue = Cookies.get(key);

    valueRef.current = storedValue ? JSON.parse(storedValue) : initialState;
    setValue(valueRef.current);
  }, [key]);

  // effect to write the value to cookies
  useEffect(() => {
    if (valueRef.current !== value) {
      if (value !== null) {
        Cookies.set(key, JSON.stringify(value), { expires: 7 });
      }

      valueRef.current = value;
    }
  }, [value, key]);

  return [value, setValue];
}
