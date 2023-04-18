import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container text-white">
          <a className="navbar-brand me-2" href="#">
           <h1>WERA</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
                
              </li>
            </ul>

            <div className="d-flex align-items-center">
             
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
            
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
