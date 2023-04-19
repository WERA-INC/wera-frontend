import React from "react";
import "./Admin.css";

import Tabledata from "./Tabledata";

const DashboardSelection = () => {
  return (
    <div>
      <div className="blue-nav">
        <nav className="navbar container" id="navtitle">
          <h4 href="#" className="theme-color me-3">
            Logo
          </h4>
          <div className="right-nav">
            <button className="btn-success btn bg-primary">Logout</button>
            <p>
              {/* {!user ? (
              <button
                className="btn btn-info"
                onClick={() => {
                  navigator("/login");
                }}
              >
                Login
              </button>
            ) : (
              <button className="btn btn-info" onClick={handleLogout}>
                Logout
              </button>
            )} */}
            </p>
          </div>
        </nav>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-6 ">
          <div class="card">
            <div className="d-flex align-items-center justify-content-between brown px-3">
              <div className="text-light">
                <h1 className="display-1">22</h1>
                <h3>JobSeekers</h3>
              </div>
              <i class="bi bi-people-fill dashboard_icons text-light"></i>
            </div>
          </div>
        </div>
      </div>

      {/* table section */}
      <div className="d-flex align-items-center justify-content-between py-2 px-5">
        <div>
          <span className="me-5 h3">JobSeekers</span>

          <i class="bi bi-people-fill h3"></i>
        </div>
        <div>
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <table class="table">
        <thead className="table-secondary">
          <tr>
            <th scope="col">mark</th>
            <th scope="col">Date</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Industry</th>
          </tr>
        </thead>
        <tbody>
          <Tabledata />
          <Tabledata />
          <Tabledata />
          <Tabledata />
          <Tabledata />
        </tbody>
      </table>
    </div>
  );
};

export default DashboardSelection;
