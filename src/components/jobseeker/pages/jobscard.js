import React from "react";
import { useNavigate } from "react-router-dom";
import { TickIcon } from "../../icons";

const JobsCard = ({ job }) => {
  const navigator = useNavigate();
  // console.log(job)
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];

  return (
    <div
      className="py-3 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-2xl"
      onClick={() => {
        navigator(`/jobs/${job.id}`);
      }}
    >
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        {job.employer.company_logo ? (
          <img
            src={job.employer.company_logo}
            alt=""
            className="profile-picture m-4"
          />
        ) : (
          <h1
            className="px-8 py-8 my-2 mx-2 text-light text-4xl"
            style={{
              backgroundColor:
                randColors[Math.floor(Math.random() * randColors.length)],
              borderRadius: "10px",
            }}
          >
            {job.employer.company_name.charAt(0)}
          </h1>
        )}
      </div>
      <div className="flex-grow sm:text-left sm:mt-0">
        <h1 className="text-black text-2xl title-font font-bold">
          {job.title}
        </h1>

        <div className="py-1 mb-2">
          <div className=" inline-block mr-2">
            <div className="flex  pr-2 h-full items-center">
              <TickIcon />
              <p className="title-font font-medium">
                {job.employer.company_name}
              </p>
            </div>
          </div>
          <div className="inline-block mr-2">
            <div className="flex  pr-2 h-full items-center">
              <TickIcon />
              <p className="title-font font-medium">{job.job_type}</p>
            </div>
          </div>
          <div className=" inline-block mr-2">
            <div className="flex  pr-2 h-full items-center">
              <TickIcon />
              <p className="title-font font-medium">{job.estimated_salary}</p>
            </div>
          </div>
        </div>
        <div className="md:flex font-bold text-gray-800">
          <p className="leading-relaxed text-sm">{job.description_summary}</p>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
