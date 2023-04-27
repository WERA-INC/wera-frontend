import React from "react";
import RecruiterImg from "./recruiter.png";

const RecruiterProfile = () => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={RecruiterImg} className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">SLEEK SOLUTIONS LTD.</h5>
            <p className="card-text">
              Sleek Solutions Ltd is a cutting-edge software company
              specializing in web and software development, as well as graphics
              design.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Adams Arcade, Kilimani
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;
