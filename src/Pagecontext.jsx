/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const newcontex = createContext();
export function Pagecontext({ children }) {
  const [state, setState] = useState(0);
  const [data, setData] = useState([]);

  return (
    <div>
      <newcontex.Provider value={{ state, setState, data, setData }}>
        {children}
      </newcontex.Provider>
    </div>
  );
}
