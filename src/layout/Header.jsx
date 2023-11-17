import React from "react";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" sticky top-0 z-50 bg-white flex items-center justify-between px-6 py-4 shadow-md">
      <div>
        <h3 className="text-xs md:text-lg font-semibold tracking-wider">
          Find any Country!
        </h3>
      </div>
      <div className="flex items-center cursor-pointer">
        <FaMoon className="mr-2" />
        <h2 className="text-sm lg:text-xl">Dark Mode</h2>
      </div>
    </header>
  );
};

export default Header;
