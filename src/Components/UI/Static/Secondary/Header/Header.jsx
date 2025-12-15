import { Search, Bell } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MiniHeader from "./miniHeader";
import { AppContext } from "../../../Context/AppContext";
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

        {/* Right: Notifications + Profile / Auth */}
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />

            {/* Notification dot */}
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full text-white"></span>
          </button>

          {/* Auth buttons / profile */}
          <AuthActions />
        </div>
      </header>
      <MiniHeader />
    </>
  );
}

function AuthActions() {
  const { isLogin, handleLogout, user } = useContext(AppContext);

  if (isLogin) {
    return (
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-700">{user?.fname || user?.email}</div>
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link to="/login" className="text-sm text-gray-700 hover:underline">
        Login
      </Link>
      <Link
        to="/register"
        className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
      >
        Register
      </Link>
    </div>
  );
}
