import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <>
      <div className="w-[100%] sticky z-[100000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
            PRECISION
            <span className="text-yellow-300">WEB</span>
          </h1>

          <div
            className="nav-link  relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content- [''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after: transition after: duration-300 after:origin-center hidden
"
          >
            Home
          </div>

          <div
            className="nav-link  relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content- [''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after: transition after: duration-300 after:origin-center hidden
"
          >
            SERVICES
          </div>

          <div
            className="nav-link  relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content- [''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after: transition after: duration-300 after:origin-center hidden
"
          >
            ABOUT
          </div>

          <div
            className="nav-link  relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content- [''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after: transition after: duration-300 after:origin-center hidden
"
          >
            PROJECT
          </div>

          <div
            className="nav-link  relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content- [''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after: transition after: duration-300 after:origin-center hidden
"
          >
            BLOG
          </div>

          <div
            className="nav-link  relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content- [''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after: transition after: duration-300 after:origin-center hidden
"
          >
            CONTACT
          </div>
          <div className="w-10 md:hidden h-10 cursor-pointer text-yellow-300">
  <MenuIcon  />
</div>

        </div>
      </div>
    </>
  );
};

export default Nav;
