import React from "react";
import { useNavigate } from "react-router-dom";
import { tickIcon } from "../icons";

const JobAppliedCard = ({ application }) => {
  const navigator=useNavigate()
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
  // console.log(application);
  return (
    <div
      class="rounded p-3 cursor-pointer text-white bg-opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(5, 27, 44, 0.95),rgba(5, 27, 44, 1), #051b2c), url(https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=600)",
        backgroundSize: "cover",
        minHeight: "20vh",
      }}
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
          <h1 class="text-2xl title-font text-center font-bold">
            {application.title}
          </h1>
          <div class="mb-4 bg-gray-600 h-[1px]"></div>

          <div class="py-1 mb-2">
            <div class=" inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                {tickIcon}
                <p class="title-font font-medium">{application.company_name}</p>
              </div>
            </div>
            <div class="inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                {tickIcon}
                <p class="title-font font-medium">
                  {application.created_at.split("T")[0]}
                </p>
              </div>
            </div>
            <div class=" inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                {tickIcon}
                <p class="title-font font-medium">
                  {application.opportunity.job_type}
                </p>
              </div>
            </div>
            <div class=" inline-block mr-2">
              <div class="flex  pr-2 h-full items-center">
                {tickIcon}
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
