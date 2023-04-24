import React from "react";

const JobAppliedCard = ({ application }) => {
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
  console.log(application);
  return (
    <div className="col-4">
      <div class="card js-card mb-4" style={{ width: 300 }}>
        <div className="d-flex align-items-center justify-content-start my-3">
          {application.company_logo ? (
            <img
              src={application.company_logo}
              alt=""
              className="profile-picture m-4"
            />
          ) : (
            <h1
              className="px-4 py-2 my-2 mx-3 text-light"
              style={{
                backgroundColor:
                  randColors[Math.floor(Math.random() * randColors.length)],
                borderRadius: "10px",
              }}
            >
              {application.company_name.charAt(0)}
            </h1>
          )}
          <div className="text-left">
            <p>Date of application:</p>
            <p>{application.created_at.split("T")[0]}</p>
          </div>
        </div>
        <div className="text-left ps-4 mb-4">
          <h4 className="fw-bold">{application.title}</h4>
          <span className="me-4">{application.company_name}</span>
          <span className="me-4">{application.job_type}</span>
          <span className="me-4">{application.estimated_salary}</span>
        </div>
      </div>
    </div>
  );
};

export default JobAppliedCard;
