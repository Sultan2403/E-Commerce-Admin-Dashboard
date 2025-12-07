
import { useState } from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchFilter({ onSearch, onCategoryChange }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="flex items-center gap-3 w-full max-w-sm">

      {/* Search Box */}
      <div className="relative flex-1">
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
      </div>

      {/* Category Select */}
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          onCategoryChange?.(e.target.value);
        }}
        className="px-3 py-2 border border-gray-300 rounded-md text-sm  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        
      >
        <option disabled value="" className="text-black">Categories</option>
        <option value="" className="text-black">All</option>
        <option value="electronics" className="text-black">electronics</option>
        <option value="gadgets" className="text-black">gadgets</option>
        <option value="accessories" className="text-black">accessories</option>
        <option value="accessories" className="text-black">cosmetics</option>
      </select>
    </div>
  );
}

