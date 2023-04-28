import React from "react";
import Profile from "./profilecomponents/profile";
import Education from "./profilecomponents/education";
import Experience from "./profilecomponents/expereince";
import Navbar from "./profilecomponents/navbar";
import Footer from "../LandingHomePage/Footer";

const JobseekerProfile = () => {
  return (
    <Fragment>
      <Navbar />

      <Profile />

      <Education />

      <Experience />

      <Footer />
    </Fragment>
  );
};

export default JobseekerProfile;
