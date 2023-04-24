import React, { useState, useEffect } from "react";
import JobseekerNavbar from "./JobseekerNavbar";
import { useParams } from "react-router";

const JobCard = () => {
  const [job, setJob] = useState(null);
  let { id } = useParams();
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/opportunities/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          data.tags.map((tag) => console.log(tag.name));

          setJob(data);
        });
      }
    });
  }, []);
  console.log(job);
  return (
    <>
      {job ? (
        <div>
          <JobseekerNavbar />
          <div className="header position-relative">
            <div className="jobcard-header position-relative">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>

          {job.employer.company_logo ? (
            <div className="logo-jobcard">
              <img
                src={job.employer.company_logo}
                alt=""
                className="profile-picture m-4"
              />
            </div>
          ) : (
            <h1
              className="text-light m-5"
              style={{
                backgroundColor:
                  randColors[Math.floor(Math.random() * randColors.length)],
                borderRadius: "50%",
                width: "200px",
                height: "200px",
                position: "absolute",
                top: "35%",
                border: "10px solid white",
                fontSize: "150px",
              }}
            >
              {job.employer.company_name.charAt(0)}
            </h1>
          )}

          <div className="row mt-5 ps-2">
            <div className="col-3">
              <div class="card company-profile" style={{ width: 300 }}>
                <div class="card-body bluey text-light">
                  <h2 class="card-title fw-bold mb-3">
                    {job.employer.company_name}
                  </h2>
                  <p className="text-left  mb-4">
                    Date Posted: {job.created_at.split("T")[0]}
                  </p>
                  <p className="text-left  mb-4">
                    Location: {job.employer.company_location}
                  </p>
                  <p className="text-left  mb-4 ">
                    Industry:{" "}
                    {job.tags.map((tag) => (
                      <span className="ms-2">{tag.name}</span>
                    ))}
                  </p>
                  <p className="text-left  mb-4">
                    Estimated salary: {job.estimated_salary}
                  </p>
                  <p className="text-left  mb-4">
                    Application Deadline: 30/12/2023
                  </p>
                  <button className="text-dark py-2 px-3 mt-2 bg-light rounded">
                    APPLY
                  </button>
                </div>
              </div>
            </div>
            {/* main */}
            <div className="col-9">
              <div className="col-4">
                <div
                  class="card js-card mb-4 text-left p-4"
                  style={{ width: 1000 }}
                >
                  <h4 className="fw-bold">{job.title}</h4>
                  <h4 className="fw-bold mt-4">About the company</h4>
                  <p>{job.employer.company_description}</p>
                  <h4 className="fw-bold mt-4">Job Description</h4>
                  <p>{job.description}</p>

                  <h4 className="fw-bold mt-4">Responsibilities</h4>
                  <ul>
                    <li className="mt-2">
                      <i class="bi bi-arrow-up-right-circle-fill me-3"></i>
                      {job.responsibilities}
                    </li>
                  </ul>
                  <h4 className="fw-bold mt-4">Minimum Qualifications</h4>
                  <ul>
                    <li className="mt-2">
                      <i class="bi bi-arrow-up-right-circle-fill me-3"></i>
                      {job.qualifications}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Please wait"
      )}
    </>
  );
};

export default JobCard;
