import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const JobSeeker = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default JobSeeker;
