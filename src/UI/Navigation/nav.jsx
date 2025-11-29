import { House } from "lucide-react";
import { Box } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { UserPen } from "lucide-react";
import { Settings } from "lucide-react";

function Nav() {
  return (
    <>
      <aside className=" h-screen w-[20%] bg-stone-200 font-medium flex flex-col">
        <div className="p-5">
          <h2 className="font-bold text-3xl mb-8">Admin panel</h2>
        </div>

        <ul className="flex flex-col w-full">
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <House />
              <span>Dashboard</span>
            </button>
          </li>

          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <Box />
              <span>Products</span>
            </button>
          </li>
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <ShoppingCart />
              <span>Orders</span>
            </button>
          </li>
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <UserPen />
              <span>Customers</span>
            </button>
          </li>
          <li>
            <button className="flex gap-x-7 w-full py-2.5 px-5 hover:bg-slate-400 transition-all duration-300">
              <Settings />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Nav;
