import "./App.css";
import Header from "./components/Header";
import DisplayProducts from "./UI/Products Display/displayproducts";
import Nav from "./UI/Navigation/nav";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[20%]">
        <Nav />
      </div>

      <div className="flex flex-col min-h-screen bg-gray-50 w-[80%]">
        <Header />

        {/* Page Content Area */}
        <div className="p-6">
          {/* Placeholder for now */}
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Screen
          </h1>
        </div>
        <DisplayProducts />
      </div>
    </div>
  );
}

export default App;
