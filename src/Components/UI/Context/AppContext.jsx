import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // Put your global states here when needed
  // Example:
  // const [cartLength, setCartLength] = useState(0);

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);







// import { createContext, useState } from "react";

// export const AppContext = createContext();

// export function AppProvider({ children }) {
//   const [cartLength, setCartLength] = useState(0);

//   return (
//     <AppContext.Provider value={{ cartLength, setCartLength }}>
//       {children}
//     </AppContext.Provider>
//   );
// }
