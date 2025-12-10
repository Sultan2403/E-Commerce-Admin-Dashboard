import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function SearchFilter({ onSearch, onCategoryChange }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="flex items-center gap-2 w-full py-2">
      {/* Search Box */}
      <div className="w-[50%] relative">
        <Search
          color="gray"
          size={20}
          className="absolute left-2.5 top-[25%] hover:cursor-pointer"
        />
        <input
          id="search3"
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
      <div className="relative flex justify-center items-center">
        <select
          value={category}
          id="category-select"
          onChange={(e) => {
            setCategory(e.target.value);
            onCategoryChange?.(e.target.value);
          }}
          className="appearance-none px-3 py-2 border text-black border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option disabled value="">
            Categories
          </option>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="gadgets">Gadgets</option>
          <option value="accessories">Accessories</option>
          <option value="cosmetics">Cosmetics</option>
        </select>
        <ChevronDown size={15} className="absolute right-1 top-auto" />
      </div>
    </div>
  );
}
