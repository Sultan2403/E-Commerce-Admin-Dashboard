import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function SearchFilter({ onSearch, onCategoryChange }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="flex items-center gap-3 w-full max-w-sm py-2 px-5">
      {/* Search Box */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />{" "}
      </div>

      {/* Category Select */}
      <div className="flex gap-1 items-center">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            onCategoryChange?.(e.target.value);
          }}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option disabled value="" className="text-black">
            Categories
          </option>
          <option value="" className="text-black">
            All
          </option>
          <option value="electronics" className="text-black">
            electronics
          </option>
          <option value="gadgets" className="text-black">
            gadgets
          </option>
          <option value="accessories" className="text-black">
            accessories
          </option>
          <option value="accessories" className="text-black">
            cosmetics
          </option>
        </select>
      </div>
    </div>
  );
}
