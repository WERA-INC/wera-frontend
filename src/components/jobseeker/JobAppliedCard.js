import React from "react";
import { useNavigate } from "react-router-dom";

const JobAppliedCard = ({ application }) => {
  const navigator=useNavigate()
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
  console.log(application);
  return (
    <div
      class="rounded p-3 cursor-pointer bg-blue-800 bg-opacity-20"
      onClick={() => {
        navigator(`/jobs/${application.opportunity.id}`);
      }}
    >
      <div class="sm:w-32 sm:h-20 h-20 w-20 sm:mr-3 inline-flex items-center justify-center flex-shrink-0">
        {application.company_logo ? (
          <img
            src={application.company_logo}
            alt=""
            className="profile-picture m-4"
          />
        ) : (
          <h1
            className="px-4 py-3 text-light"
            style={{
              backgroundColor:
                randColors[Math.floor(Math.random() * randColors.length)],
              borderRadius: "10px",
            }}
          >
            {application.company_name.charAt(0)}
          </h1>
        )}
      </div>
      <div class="pe-3 py-2">
        <div class="flex-grow sm:text-left sm:mt-0">
          <h1 class="text-black text-2xl title-font text-center font-bold">
            {application.title}
          </h1>
          <div class="mb-4 bg-gray-600 h-[1px]"></div>

          <div class="py-1 mb-2">
            <div class=" inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                <svg
                  class="text-blue-300 w-6 h-6 mr-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <p class="title-font font-medium">{application.company_name}</p>
              </div>
            </div>
            <div class="inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                <svg
                  class="text-blue-300 w-6 h-6 mr-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <p class="title-font font-medium">
                  {application.created_at.split("T")[0]}
                </p>
              </div>
            </div>
            <div class=" inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                <svg
                  class="text-blue-300 w-6 h-6 mr-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <p class="title-font font-medium">
                  {application.opportunity.job_type}
                </p>
              </div>
            </div>
            <div class=" inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                <svg
                  class="text-blue-300 w-6 h-6 mr-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <p class="title-font font-medium">
                  {application.opportunity.estimated_salary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAppliedCard;
//  <div className="col-4">
//    <div class="card js-card mb-4" style={{ width: 300 }}>
//      <div className="d-flex align-items-center justify-content-start my-3">
//        {application.company_logo ? (
//          <img
//            src={application.company_logo}
//            alt=""
//            className="profile-picture m-4"
//          />
//        ) : (
//          <h1
//            className="px-4 py-2 my-2 mx-3 text-light"
//            style={{
//              backgroundColor:
//                randColors[Math.floor(Math.random() * randColors.length)],
//              borderRadius: "10px",
//            }}
//          >
//            {application.company_name.charAt(0)}
//          </h1>
//        )}
//        <div className="text-left">
//          <p>Date of application:</p>
//          <p>{application.created_at.split("T")[0]}</p>
//        </div>
//      </div>
//      <div className="text-left ps-4 mb-4">
//        <h4 className="fw-bold">{application.title}</h4>
//        <span className="me-4">{application.company_name}</span>
//        <span className="me-4">{application.job_type}</span>
//        <span className="me-4">{application.estimated_salary}</span>
//      </div>
//    </div>
//  </div>;
