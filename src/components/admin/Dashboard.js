import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigator=useNavigate()
  
  return (
    <div className="admin-land">
      <nav className="navbar container" id="navtitle">
        <h4 href="#" className="me-3">
          WERA
        </h4>
        <div className="right-nav">
          <button className="btn blue text-light">Logout</button>
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

      <div className="container">
        <div className="row">
          <div className="col-4 admin-image-holder d-lg-block d-none">
            <img
              src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row ps-md-5">
              <div
                className="col-md-6 mb-3"
                onClick={() => {
                  navigator("/dashboardselect");
                }}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between brown px-3">
                    <i class="bi bi-people-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">22</h1>
                      <h3>JobSeekers</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                    <h6 className="text-light">View Details</h6>
                    <i class="bi bi-arrow-right-circle-fill h1"></i>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 mb-3"
                onClick={() => {
                  navigator("/dashboardselect");
                }}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between green px-3">
                    <i class="bi bi-houses-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">28</h1>
                      <h3>Employers</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                    <h6 className="text-light">View Details</h6>
                    <i class="bi bi-arrow-right-circle-fill h1"></i>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 mb-3"
                onClick={() => {
                  navigator("/dashboardselect");
                }}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between blue px-3">
                    <i class="bi bi-clipboard2-data-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">13</h1>
                      <h3>Jobs</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                    <h6 className="text-light">View Details</h6>
                    <i class="bi bi-arrow-right-circle-fill h1"></i>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 mb-3"
                onClick={() => {
                  navigator("/dashboardselect");
                }}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between pink px-3">
                    <i class="bi bi-bar-chart-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">8</h1>
                      <h3>Job Applications</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
                    <h6 className="text-light">View Details</h6>
                    <i class="bi bi-arrow-right-circle-fill h1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div class="card card-hover">
          <div className="d-flex align-items-center justify-content-between brown px-3">
            <img
              src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="text-light">
              <h1 className="display-6">22</h1>
              <h3>JobSeekers</h3>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
            <h6 className="text-light">View Details</h6>
            <i class="bi bi-arrow-right-circle-fill h1"></i>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
