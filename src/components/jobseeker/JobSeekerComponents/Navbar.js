import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./Logo5.png"

const Navbar = () => {
  return (
    <nav class="bg-[#0D2644] shadow dark:bg-gray-800">
      <div class="container flex items-center justify-center p-6 mx-auto text-white capitalize dark:text-gray-300">
        <a href="#" class="text-white dark:text-gray-200 mx-1.5 sm:mx-6">
          <img src={logo} alt="Wera" 
          style={{
            maxWidth: "100%",
            height: "50px",
            width:"auto",
            marginLeft: "0.5rem",
           
          }}/>
        </a>

        <a
          href="#"
          class=" border-transparent text-white mx-1.5 sm:mx-6"
          style={{ textDecoration: "none" }}
        >
          Home
        </a>

        <button class="bg-[#143C66] hover:bg-[#87C0F2] text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
