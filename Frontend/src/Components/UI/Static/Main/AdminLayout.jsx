import { Outlet } from "react-router-dom";
import Nav from "../Secondary/Navigation/nav";
import Header from "../Secondary/Header/Header";

export default function AdminLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="w-[20%]">
        <Nav />
      </div>

      <div className="flex flex-col min-h-screen bg-gray-50 w-[80%]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
