import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import SearchBook from "./SearchBook";
import { BsFillLightbulbFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

function Header() {

  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-orange-700 z-10 h-[80px] fixed w-full py-5 px-10 flex justify-end">
      <div className="flex  justify-between gap-x-6 items-center">
        <Link to="/google___books">
          <span onClick={() => window.scroll(0, 0)} className="cursor-pointer mr-[50px]">
            GoogleBook React TypeScript
          </span>
        </Link>
        {theme === "light" ? (
          <BsFillLightbulbFill
            className="cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <MdDarkMode
            className="cursor-pointer dark:text-black"
            onClick={() => setTheme("light")}
          />
        )}
        <SearchBook />
      </div>
    </div>
  );
}

export default Header;
