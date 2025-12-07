
import "./App.css";
import Header from "./components/Header";
import DisplayProducts from "./UI/Products Display/displayproducts";
import Nav from "./UI/Navigation/nav";
import SearchFilter from "./UI/Search Filter/searchFilter";
import Button from "./UI/addButton/button";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[20%]">
        <Nav />
      </div>

      <div className="flex flex-col min-h-screen w-[80%]">
        <Header />

        {/* Page Content Area */}
        <div className="p-6  bg-slate-100">
          {/* Placeholder for now */}
          <h1 className="text-2xl pt-6 font-bold text-gray-800">
            Products
          </h1>
            <h4>Manage your product Inventory</h4>
        </div>
        <SearchFilter/>
        <DisplayProducts />
        <Button/>
      </div>
    </div>
  );
}

export default App;
