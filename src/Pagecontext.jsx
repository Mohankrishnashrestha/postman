/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const context = createContext();
const themes = {
  light: {
    color: "black",
    background: "white",
  },
  dark: {
    color: "white",
    background: "black",
  },
};
export function PageProvider({ children }) {
  const [state, setState] = useState(0);
  const [change, setChange] = useState([]);
  const [theme, setTheme] = useState(themes.light);
  const toggle = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };
  const handle = async () => {
    try {
      const response = await axios.get("  https://fakestoreapi.com/products");
      setChange(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handle();
  }, []);

  return (
    <context.Provider
      value={{ state, setState, change, theme, setTheme, toggle }}
    >
      {children}
    </context.Provider>
  );
}
