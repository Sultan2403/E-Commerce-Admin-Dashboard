import { House } from "lucide-react";
import { Box } from "lucide-react";
import {ShoppingCart } from "lucide-react";
import {UserPen } from "lucide-react";
import {Settings } from "lucide-react";



function Nav() {
  return (
    <>
   
   <aside className="flex-col sticky text-left h-100  bg-slate-400">
    <h2 className="font-bold text-3xl mb-8">Admin panel</h2>
    <ul>
    
      <div className="flex gap-x-7 gap-y-7 py-2.5">
         <House />
         <button>Dashboard</button>
      </div>  
      <div className="flex gap-x-7 gap-y-7 py-2.5">
       <Box />
       <button>Products</button>
      </div>

      <div className="flex gap-x-7 gap-y-7 py-2.5">
        <ShoppingCart />
        <button>Orders</button>
      </div>

      <div className="flex gap-x-7 gap-y-7 py-2.5">
        <UserPen />
        <button>Customers</button>
      </div>

      <div className="flex gap-x-7 gap-y-7 py-2.5">
        <Settings />
        <button>Settings</button>
      </div>
        
        
      </ul>
</aside>
</>
  );
}

export default Nav;
