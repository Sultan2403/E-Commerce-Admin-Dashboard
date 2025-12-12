import { Search, Bell } from "lucide-react";
import React from "react";
import MiniHeader from "./miniHeader";

export default function Header() {
  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}

        {/* Center: Search */}
        <div className="w-full max-w-md mx-6">
          <div className="relative">
            <Search
              color="gray"
              size={20}
              className="absolute left-2.5 top-[20%] hover:cursor-pointer"
            />
            <input
              id="search1"
              type="text"
              placeholder="Search products, orders..."
              className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />

            {/* Notification dot */}
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full text-white"></span>
          </button>

          {/* User profile */}
          <div className="h-9 w-9 rounded-full bg-gray-300 overflow-hidden cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRCZsnZKow2okDtkevYDoQSozvsgvKtx1TQ&s"
              alt="User"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>
      <MiniHeader />
    </>
  );
}
