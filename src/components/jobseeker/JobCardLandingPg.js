import React from "react";
import { useNavigate } from "react-router-dom";

const JobCardLandingPg = ({ job }) => {
  const navigator = useNavigate();
  // console.log(job)
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];

  return (
    <div
      class="card js-card mb-4"
      style={{ width: 800 }}
      onClick={() => {
        navigator(`/jobs/${job.id}`);
      }}
    >
      <div className="d-flex align-items-center justify-content-start">
        {job.employer.company_logo ? (
          <img
            src={job.employer.company_logo}
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
            {job.employer.company_name.charAt(0)}
          </h1>
        )}

        <div>
          <h6 className="text-left">{job.title}</h6>
          <span className="me-4">{job.employer.company_name}</span>
          <span className="me-4">{job.job_type}</span>
          <span className="me-4">{job.estimated_salary}</span>
        </div>
      </div>
      <p className="text-left ps-4">{job.description_summary}</p>
    </div>
  );
};

export default JobCardLandingPg;
