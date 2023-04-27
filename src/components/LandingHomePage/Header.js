import React from "react";
import Button from "./Navbar components/Button";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";  

const Header = () => {
   const navigator = useNavigate();
  return (
    <section
      style={{
        height:"100vh",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.7),rgba(0,0,0.95,1), #0D2644), url(https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div class=" text-white pb-10">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 class="text-5xl md:text-5xl p-2 text-blue-200 tracking-loose">
              /WE-RA
            </h1>
            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              (we-ra)
            </h2>
            <p class="text-sm md:text-base text-left text-gray-50 mb-4">
              a.k.a /mboka/ is a Kenyan slang meaning work . Commonly associated
              with the youth and some native languages
            </p>
            
            <a
              href="#"
              class="bg-blue-500 hover:bg-blue-900 text-white hover:text-blue-900 rounded shadow hover:shadow-lg py-2 px-4 border "
              style={{ textDecoration: "none" }}
              onClick={() => {
                navigator("/register");
              }}
            >
              Get Started

            </a>
          </div>
          <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <img
              src="https://c0.wallpaperflare.com/preview/374/276/835/job-search-hr-cv.jpg"
              alt=""
              className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
