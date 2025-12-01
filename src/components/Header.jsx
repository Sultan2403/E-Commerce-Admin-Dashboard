import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="text-xl font-semibold text-gray-800">
        Admin Panel
      </div>

      {/* Center: Search */}
      <div className="w-full max-w-md mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products, orders..."
            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
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
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          {/* Notification dot */}
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User profile */}
        <div className="h-9 w-9 rounded-full bg-gray-300 overflow-hidden cursor-pointer">
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
