import React from "react";
import Button from "./Navbar components/Button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-center text-left p-9 items-left h-3/4">
        <h1
          className="text-6xl "
          style={{
            color: "#0D2644",
            letterSpacing: "3px",
          }}
        >
          /WERA/
        </h1>
        <h1 className=" text-6xl " style={{ color: "#11477B" }}>
          [we-ra]
        </h1>

        <h1 className="md:text-1xl text-2xl text-white  py-5">
          a.k.a /mboka/ is a Kenyan slang meaning work (kazi).Commonly associated{" "}
          <br></br> with the youth and some native languages
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Header;
