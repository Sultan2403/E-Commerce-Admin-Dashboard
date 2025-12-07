
import { useState } from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Funnel } from "lucide-react";


export default function SearchFilter({ onSearch, onCategoryChange }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="flex items-center gap-3 w-full max-w-sm  bg-slate-100 ">

      {/* Search Box */}
      <div className="relative flex-1 pl-5  bg-slate-100">
        
  
        {/* <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" /> */}
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-7 top-2.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l4.5 4.5m-2-7a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
      </div>

      {/* Category Select */}
      <div className="relative">
      <div>
        <Funnel  className="size-4 absolute left-3  top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"/>
      </div>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          onCategoryChange?.(e.target.value);
        }}
        className=" px-3 py-2 pr-4 border border-gray-300 rounded-md text-sm  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        
      >
        
        
        <option disabled value="" className="text-black ">All ategories</option>
        <option value="" className="text-black">All</option>
        <option value="electronics" className="text-black">electronics</option>
        <option value="gadgets" className="text-black">gadgets</option>
        <option value="accessories" className="text-black">accessories</option>
        <option value="accessories" className="text-black">cosmetics</option>
      </select>
      </div>
      
    </div>
  );
}

