import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const monthlyAllowee = 75000;
  const [cartItems, setCartItems] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const next = [...prev, item];
      setCartLength(next.length);
      return next;
    });
  };

  useEffect(() => {
    // No external auth service wired yet. Keep logged-out by default.
  }, []);

  // Lightweight local stubs for register/login to avoid runtime errors
  const handleRegister = (payload) => {
    localStorage.setItem("user", JSON.stringify(payload));
    setUser(payload);
    setIsLogin(true);
    return true;
  };

  const handleLogin = async (payload) => {
    // In absence of a backend, accept payload as authenticated user
    localStorage.setItem("user", JSON.stringify(payload));
    setUser(payload);
    setIsLogin(true);
    return true;
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLogin(false);
  };

  return (
    <AppContext.Provider
      value={{
        monthlyAllowee,
        cartItems,
        cartLength,
        addToCart,
        handleRegister,
        isLogin,
        handleLogin,
        handleLogout,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };




















































// import { createContext, useContext, useState } from "react";


// const AppContext = createContext();

// export const AppProvider = ({ children }) => {

//   // Put your global states here when needed
//   // Example:
//   // const [cartLength, setCartLength] = useState(0);

//   return (
//     <AppContext.Provider value={{}}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);

