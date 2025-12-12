import { useState } from "react";


import { House, Box, ShoppingCart, UserPen, Settings, Menu } from "lucide-react";
import Orders from "../../Pages/Orders Page/orders";



 function Nav() {
   const [open, setOpen] = useState(false);
  return (
    <>
     {/* 🔥 Mobile Toggle Button (place this ABOVE the <aside>)
      <button 
        onClick={() => setOpen(!open)} 
        className="md:hidden p-4 fixed top-4 left-4 z-50 bg-white shadow rounded"
      >
        <Menu size={28}/>
      </button> */}
   
      {/* {side bar} */}
      <aside className=" h-screen w-full bg-stone-200 font-medium flex flex-col">
        <div className="p-5">
          <h2 className="font-bold text-3xl mb-8">Admin panel</h2>
        </div>

        <ul className="flex flex-col w-full">
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <House size={24}/>
              <span>Dashboard</span>
            </button>
          </li>

          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <Box size={24} />
              <span>Products</span>
            </button>
          </li>
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <ShoppingCart size={24}/>
              <a href="/Orders">Orders</a>
            </button>
          </li>
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <UserPen size={24}/>
              <span>Customers</span>
            </button>
          </li>
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <Settings size={24}/>
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Nav;
