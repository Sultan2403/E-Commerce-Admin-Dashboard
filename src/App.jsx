import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayProducts from "./Components/UI/Pages/Products Page/Products Display/displayproducts";
import Orders from "./Components/UI/Pages/Orders Page/orders";
import AdminLayout from "./Components/UI/Static/Main/AdminLayout";
import Dashboard from "./Components/UI/Pages/Dashboard/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<DisplayProducts />}></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
