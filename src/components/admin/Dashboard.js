import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigator = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [jobseekers, setJobseekers] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [applications, setApplications] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3000/opportunities`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setJobs(data));
      }
    });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/profiles`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setJobseekers(data));
      }
    });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/employers`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setEmployers(data));
      }
    });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/opportunities`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setApplications(data));
      }
    });
  }, []);
  // console.log(applications)
  // console.log(jobs);
  // console.log(employers);
  // console.log(jobseekers);


  return (
    <div className="admin-land">
      <nav className="navbar container" id="navtitle">
        <h4 href="#" className="me-3">
          WERA
        </h4>
        <div className="right-nav">
          <button className="py-2 px-3 blue text-light">Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <div className="row ps-md-5">
              <div
                className="col-md-6 mb-3"
                onClick={() => {
                  navigator(`/admin-dashboard/${"profiles"}`);
                }}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between brown px-3">
                    <i class="bi bi-people-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">{jobseekers.length}</h1>
                      <h3>Job Seekers</h3>
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
                  navigator(`/admin-dashboard/${"employers"}`);
                }}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between green px-3">
                    <i class="bi bi-houses-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">{employers.length}</h1>
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
                  navigator(`/admin-dashboard/${"opportunities"}`);
                }}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between blue px-3">
                    <i class="bi bi-clipboard2-data-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">{jobs.length}</h1>
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
                onClick={()=>{navigator(`/admin-dashboard/${"applications"}`);}}
                style={{ width: "250", cursor: "pointer" }}
              >
                <div class="card card-hover">
                  <div className="d-flex align-items-center justify-content-between pink px-3">
                    <i class="bi bi-bar-chart-fill dashboard_icons text-light"></i>
                    <div className="text-light">
                      <h1 className="display-6">{applications.length}</h1>
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
    </div>
  );
};

export default Dashboard;
