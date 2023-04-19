import React, { useState } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./LandingHomePage.css";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <div class="header-blue">
          <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" stye={{ letterSpacing: "2px" }}>
                WERA
              </a>
              <button
                data-toggle="collapse"
                class="navbar-toggler"
                data-target="#navcol-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                </ul>
                <form class="form-inline mr-auto" target="_self"></form>
                <span class="navbar-text">
                  {" "}
                  <a class="login" href="#">
                    Log In
                  </a>
                </span>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn text-white dropdown-toggle"
                    style={{ backgroundColor: "#0D2644" }}
                    data-bs-toggle="dropdown"
                  >
                    Navigation
                  </button>
                  <ul
                    class="bg-transparent  dropdown-menu"
                    style={{ border: "none" }}
                  >
                    <li>
                      <a class="text-black dropdown-item" href="/dashboard">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a class="text-black dropdown-item" href="/recruiter">
                        Employer
                      </a>
                    </li>
                    <li>
                      <a class="text-black dropdown-item" href="/jobseeker">
                        Job Seeker
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div class="container hero">
            <div class="row">
              <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                <h1>/WERA/</h1>
                <p>
                  a.k.a /mboka/ is a Kenyan slang meaning work .Commonly
                  associated with the youth and some native languages<br></br>
                </p>
                <button
                  class="btn btn-light btn-lg action-button"
                  type="button"
                >
                  Learn More<i class="fa fa-long-arrow-right ml-2"></i>
                </button>
              </div>
              <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block ">
                <div >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="image"
                    class="img-fluid"
                    style={{height:"75vh", width:"90%", borderRadius:"10px"}}
                  />
                </div>
              </div>
            </div>
          </div>
   
        </div>
      </div>
    </>
  );
};

export default Navbar;
