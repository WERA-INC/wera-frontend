import React from "react";
import { useNavigate } from "react-router-dom";

const JobseekerNavbar = () => {
  const navigator = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a href="#" class="navbar-brand me-5">
          WERA
        </a>
        <a
          href="#"
          class="navbar-brand"
          onClick={() => {
            navigator("/jobsapplied");
          }}
        >
          Jobs Applied
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button className="blue py-2 px-3 mt-2 text-light">Logout</button>
            </li>
            <li class="nav-item">
              <div className="profile-pic ms-5">
                <img
                  src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default JobseekerNavbar;
