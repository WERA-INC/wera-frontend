import Footer from "../guest/footer"
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const JobSeeker = () => {
  return (
    <Fragment>
      <Outlet />

      <Footer/>
    </Fragment>
  );
};

export default JobSeeker;
