import React from "react";
import { appleImg, searchImg, bagImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full h-[70px] py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="" className="w-[14px] h-[18px]" />
        <div className="flex flex-1 justify-center max-sm:hidden gap-5">
          {navLists.map((x, i) => (
            <div
              className="px-5 py-2 text-sm cursor-pointer text-gray-500 hover:text-white transition-all"
              key={i}
            >
              {x}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end  max-sm:flex-1 cursor-pointer hover:text-white transition-all">
          <img src={searchImg} alt="" />
          <img src={bagImg} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
