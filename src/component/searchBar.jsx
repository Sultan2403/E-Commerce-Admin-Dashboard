import { House } from "lucide-react";
import { Box } from "lucide-react";
import {ShoppingCart } from "lucide-react";
import {UserPen } from "lucide-react";
import {Settings } from "lucide-react";
import {BellDot} from "lucide-react";
import {UserRound} from "lucide-react";


function SearchBar(){
    return(
       <>
    <aside className="">
    <h2 className="">Admin panel</h2>
    <ul>
    
      <div className="">
         <House />
         <button>Dashboard</button>
      </div>  
      <div className="">
       <Box />
       <button>Products</button>
      </div>

      <div className="">
        <ShoppingCart />
        <button>Orders</button>
      </div>

      <div className="">
        <UserPen />
        <button>Customers</button>
      </div>

      <div className="">
        <Settings />
        <button>Settings</button>
      </div>
        
        
      </ul>
</aside>
       </> 
    )
}
export default SearchBar