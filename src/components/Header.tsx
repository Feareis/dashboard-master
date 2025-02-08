import React from "react";
import { Search, Bell, User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="p-4 flex justify-between items-center px-6 py-4">
      <div className="flex items-center bg-gray-700 p-2 rounded-md w-1/3">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search files..."
          className="bg-transparent outline-none text-gray-100 ml-2 w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <User size={24} className="text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
