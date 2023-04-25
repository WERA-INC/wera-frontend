import React from "react";
import { useNavigate } from "react-router-dom";

const JobseekerNavbar = () => {
  const navigator = useNavigate();
  return (
    <nav class="navbar py-3">
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

          {/* <img
              src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="profile-pic"
            /> */}
        </div>
      </div>
    </nav>
  );
};

export default JobseekerNavbar;
