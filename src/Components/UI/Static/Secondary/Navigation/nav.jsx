import { useState } from "react";

import {
  House,
  Box,
  ShoppingCart,
  UserPen,
  Settings,
  Menu,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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
      <aside className=" h-screen w-full bg-stone-200 font-semibold flex flex-col">
        <div className="p-5">
          <h2 className="font-bold text-3xl mb-8">Admin panel</h2>
        </div>

        <ul className="flex flex-col w-full">
          <NavLink
            to={""}
            className={({ isActive }) =>
              isActive ? "text-blue-700 bg-slate-400" : null
            }
          >
            <li>
              <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
                <House size={24} />
                <span>Dashboard</span>
              </button>
            </li>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-700 bg-slate-400" : null
            }
          >
            <li>
              <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
                <Box size={24} />
                <span>Products</span>
              </button>
            </li>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-blue-700 bg-slate-400" : null
            }
          >
            <li>
              <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
                <ShoppingCart size={24} />
                <span>Orders</span>
              </button>
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 bg-blue-300" : null
            }
            to={null}
          >
            <li>
              <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
                <UserPen size={24} />
                <span>Customers</span>
              </button>
            </li>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 bg-slate-300" : null
            }
            to={"settings"}
          >
            <li>
              <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
                <Settings size={24} />
                <span>Settings</span>
              </button>
            </li>
          </NavLink>
        </ul>
      </aside>
    </>
  );
}

export default Nav;
