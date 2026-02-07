import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayProducts from "./Components/UI/Pages/Products Page/displayproducts";
import Orders from "./Components/UI/Pages/Orders Page/orders";
import AdminLayout from "./Components/UI/Static/Main/AdminLayout";
import Dashboard from "./Components/UI/Pages/Dashboard/Dashboard";
import ComingSoon from "./Components/UI/Static/Main/coming_soon";

function App() {
  return (
    <BrowserRouter basename="/E-Commerce-Admin-Dashboard/">
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<DisplayProducts />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="customers" element={<ComingSoon />}></Route>
          <Route path="settings" element={<ComingSoon />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
