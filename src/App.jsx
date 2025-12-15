import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayProducts from "./Components/UI/Pages/Products Page/Products Display/displayproducts";
import Orders from "./Components/UI/Pages/Orders Page/orders";
import AdminLayout from "./Components/UI/Static/Main/AdminLayout";
import Dashboard from "./Components/UI/Pages/Dashboard/Dashboard";
import { AppProvider } from "./Components/UI/Context/AppContext";
import Login from "./Components/UI/Pages/Auth/Login";
import Register from "./Components/UI/Pages/Auth/Register";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<DisplayProducts />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
