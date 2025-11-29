import "./App.css";

import DisplayProducts from "./UI/Products Display/displayproducts";
import Nav from "./UI/Navigation/nav";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Nav />
      <DisplayProducts />
    </div>
  );
}

export default App;
