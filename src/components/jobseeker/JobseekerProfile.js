import React from "react";
import Profile from "./JobSeekerComponents/Profile";
import Education from "./JobSeekerComponents/Education";
import Experience from "./JobSeekerComponents/Experience";
import Navbar from "./JobSeekerComponents/Navbar";
import Footer from "../LandingHomePage/Footer"

const JobseekerProfile = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Profile />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default JobseekerProfile;
