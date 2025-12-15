import { useState, useContext } from "react";

import {
  House,
  Box,
  ShoppingCart,
  UserPen,
  Settings,
  Menu,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

function Nav() {
  const [open, setOpen] = useState(false);
  const { isLogin, user, handleLogout } = useContext(AppContext);
  return (
    <>
 
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
        <div className="mt-auto p-4 border-t">
          {isLogin ? (
            <div className="flex flex-col gap-2">
              <div className="text-sm text-gray-700">Signed in as</div>
              <div className="font-semibold">{user?.fname || user?.email}</div>
              <button
                onClick={handleLogout}
                className="mt-2 px-3 py-1 bg-red-600 text-white rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="text-sm text-gray-700 hover:underline">
                Login
              </Link>
              <Link to="/register" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default Nav;
