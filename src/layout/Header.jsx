import React from "react";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      <div>
        <h3 className="text-xs md:text-lg font-semibold tracking-wider">
          Find any Country!
        </h3>
      </div>
      <div className="cursor-pointer">
        <FaMoon />
      </div>
    </header>
  );
};

export default Header;
