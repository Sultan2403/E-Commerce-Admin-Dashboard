import "./App.css";
import Header from "./Components/UI/Static/Header/Header";
import DisplayProducts from "./Components/UI/Pages/Products Page/Products Display/displayproducts";
import Nav from "./Components/UI/Static/Navigation/nav";
import SearchFilter from "./Components/UI/Static/Search Filter/searchFilter";
import Button from "./Components/UI/Static/Header/button";
import MiniHeader from "./Components/UI/Static/Header/miniHeader";
import Orders from "./Components/UI/Pages/Orders Page/orders";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[20%]">
        <Nav />
      </div>

      <div className="flex flex-col min-h-screen bg-gray-50 w-[80%]">
        <Header />
        <MiniHeader />
        <SearchFilter />
        <DisplayProducts />
        <Button />
        <Orders />
      </div>
    </div>
  );
}

export default App;
