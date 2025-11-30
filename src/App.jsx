import React from "react";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Content Area */}
      <div className="p-6">
        {/* Placeholder for now */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard Screen
        </h1>
      </div>
    </div>
  );
}
