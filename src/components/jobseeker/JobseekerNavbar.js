import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Logo5.png";
import { ProfileIcon } from "../icons";

const JobseekerNavbar = ({name}) => {
  const navigator = useNavigate();
  return (
    <nav style={{ backgroundColor: "#0D2644" }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/> */}
              <img
                src={Logo}
                alt="wera"
                href="/landingpage"
                className="md:cursor-pointer h-12 "
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <a
                  href="#"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a> */}
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium hover:no-underline no-underline"
                  onClick={() => {
                    navigator("/jobseeker");
                  }}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium hover:no-underline no-underline"
                  onClick={() => {
                    navigator("/jobsapplied");
                  }}
                >
                  Jobs Applied
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium hover:no-underline no-underline"
              onClick={() => {
                localStorage.clear();
                navigator("/login");
              }}
            >
              Logout
            </a>

            <div
              className="relative ml-3"
              onClick={() => {
                navigator("/jobseekerprofile");
              }}
            >
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-9 h-9 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
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
{
  /* <nav className="navbar py-3">
      <div className="container">
        <div>
          <a href="#" className="navbar-brand me-5">
            WERA
          </a>
          <a
            href="#"
            className="navbar-brand blue rounded px-2 py-1 text-light h6"
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
    </nav> */
}
