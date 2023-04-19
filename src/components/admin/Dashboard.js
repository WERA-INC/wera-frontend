import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";


const Dashboard = () => {
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
      <div className="container d-flex align-items-center justify-content-center p-5">
        <div className="row ps-md-5">
          <div
            className="col-md-6 mb-3"
            style={{ width: "450", cursor: "pointer" }}
          >
            <div class="card ">
              <div className="d-flex align-items-center justify-content-between brown px-3">
                <i class="bi bi-people-fill dashboard_icons text-light"></i>
                <div className="text-light">
                  <h1 className="display-1">22</h1>
                  <h3>JobSeekers</h3>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                <h4 className="text-light">View Details</h4>
                <i class="bi bi-arrow-right-circle-fill h1"></i>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mb-3"
            style={{ width: "450", cursor: "pointer" }}
          >
            <div class="card ">
              <div className="d-flex align-items-center justify-content-between green px-3">
                <i class="bi bi-houses-fill dashboard_icons text-light"></i>
                <div className="text-light">
                  <h1 className="display-1">28</h1>
                  <h3>Employers</h3>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                <h4 className="text-light">View Details</h4>
                <i class="bi bi-arrow-right-circle-fill h1"></i>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mb-3"
            style={{ width: "450", cursor: "pointer" }}
          >
            <div class="card ">
              <div className="d-flex align-items-center justify-content-between blue px-3">
                <i class="bi bi-clipboard2-data-fill dashboard_icons text-light"></i>
                <div className="text-light">
                  <h1 className="display-1">13</h1>
                  <h3>Jobs</h3>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                <h4 className="text-light">View Details</h4>
                <i class="bi bi-arrow-right-circle-fill h1"></i>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 mb-3"
            style={{ width: "450", cursor: "pointer" }}
          >
            <div class="card ">
              <div className="d-flex align-items-center justify-content-between pink px-3">
                <i class="bi bi-bar-chart-fill dashboard_icons text-light"></i>
                <div className="text-light">
                  <h1 className="display-1">8</h1>
                  <h3>Job Applications</h3>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                <h4 className="text-light">View Details</h4>
                <i class="bi bi-arrow-right-circle-fill h1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div class="card ">
          <div className="d-flex align-items-center justify-content-between brown px-3">
            <img
              src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="text-light">
              <h1 className="display-1">22</h1>
              <h3>JobSeekers</h3>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
            <h4 className="text-light">View Details</h4>
            <i class="bi bi-arrow-right-circle-fill h1"></i>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
