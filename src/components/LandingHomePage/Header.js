import React from "react";
import Button from "./Navbar components/Button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
      style={{backgroundImage:"url(https://media.istockphoto.com/id/1283869564/photo/christmas-decorations-on-the-blue-background-with-copy-space-for-your-text.jpg?b=1&s=170667a&w=0&k=20&c=uQwSG0iXqI6riFjetYsGHvBe0ubcTjZ7QUijIWmJT-g=)"}}
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-black text-2xl font-medium ">/W E R A/</h2>
        <h1 className="md:text-5xl text-3xl text-black font-semibold py-5">
          Items every woman should have
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Header;