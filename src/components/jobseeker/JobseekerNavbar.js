import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo5.png";
import { ProfileIcon } from "../icons";

const JobseekerNavbar = ({name}) => {
  const navigator = useNavigate();
  return (
    <nav
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(5, 27, 44, 0.9),rgba(5, 27, 44, 0.95), #051b2c), url(https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=600)",
        backgroundSize: "cover",
      }}
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                src={Logo}
                alt="wera"
                href="/landingpage"
                className="md:cursor-pointer h-12 "
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium hover:no-underline no-underline"
                  onClick={() => {
                    navigator("/jobseeker");
                  }}
                >
                  Home
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  hover:no-underline no-underline"
                  onClick={() => {
                    navigator("/jobsapplied");
                  }}
                >
                  Jobs Applied
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:no-underline no-underline"
              onClick={() => {
                localStorage.clear();
                navigator("/login");
              }}
            >
              Logout
            </a>
            <div className="ms-5">
              <div
                class="relative ps-3 mx-auto"
                onClick={() => {
                  navigator("/jobseekerprofile");
                }}
              >
                <div className="text-gray-300">{ProfileIcon}</div>
              </div>
              {name !== undefined ? (
                <h6 className="text-center text-sm text-gray-300">{name}</h6>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default JobseekerNavbar;
{/* <nav class="navbar py-3">
      <div class="container">
        <div>
          <a href="#" class="navbar-brand me-5">
            WERA
          </a>
          <a
            href="#"
            class="navbar-brand blue rounded px-2 py-1 text-light h6"
            onClick={() => {
              navigator("/jobsapplied");
            }}
          >
            Jobs Applied
          </a>
        </div>
        <div>
          <button
            className="blue rounded text-light py-2 px-3 mt-2 "
            onClick={() => {
              navigator("/login");
            }}
          >
            Logout
          </button>


        </div>
      </div>
    </nav> */}