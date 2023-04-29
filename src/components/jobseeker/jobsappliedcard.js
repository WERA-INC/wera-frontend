import React from "react";
import { useNavigate } from "react-router-dom";
import { TickIcon } from "../icons";

const JobAppliedCard = ({ application }) => {
  const navigator = useNavigate();
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
  // console.log(application);
  return (
    <div
      className="rounded p-3 cursor-pointer bg-gray-200 bg-opacity-90 text-blue-950 "
      style={{
        minHeight: "20vh",
      }}
      onClick={() => {
        navigator(`/jobs/${application.opportunity.id}`);
      }}
    >
      <div className="flex items-center justify-center  mx-auto">
        {application.company_logo ? (
          <img
            src={application.company_logo}
            alt=""
            className="profile-picture m-4"
          />
        ) : (
          <h1
            className="px-4 py-3 text-light text-4xl"
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
      <div className="pe-3 py-2">
        <div className="flex-grow sm:text-left sm:mt-0">
          <h1 className="text-2xl title-font text-center font-bold">
            {application.title}
          </h1>
          <div className="mb-4 bg-gray-600 h-[1px]"></div>

          <div className="py-1 mb-2">
            <div className=" inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
                  {application.company_name}
                </p>
              </div>
            </div>
            <div className="inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
                  {application.created_at.split("T")[0]}
                </p>
              </div>
            </div>
            <div className=" inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
                  {application.opportunity.job_type}
                </p>
              </div>
            </div>
            <div className=" inline-block mr-2">
              <div className="flex  pr-2 h-full items-center">
                <TickIcon />
                <p className="title-font font-medium">
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
//    <div className="card js-card mb-4" style={{ width: 300 }}>
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
