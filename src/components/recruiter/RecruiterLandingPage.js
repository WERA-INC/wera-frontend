import React from "react";
import RecruiterNavbar from "./RecruiterNavbar";
import RecruiterProfile from "./RecruiterProfile";
import JobPosted from "./JobPosted";
const RecruiterLandingPage = () => {
  return (
    <div>
      <RecruiterNavbar />
      {/* <RecruiterProfile/> */}
      <div className="header">
        <div className="blue text-light p-5 text-left">
          {/* {jobseeker ? (
            <h6 className="">Hello, {jobseeker.full_name}</h6>
          ) : null} */}

          <div className="row">
            <div className="col-">
              <h2 className="display-3 fw-bold">
                NEW FRESH TALENT FOR YOUR TEAM
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <JobPosted />
    </div>
  );
};

export default RecruiterLandingPage;
