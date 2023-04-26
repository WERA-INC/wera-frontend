import React from "react";
import { useNavigate } from "react-router-dom";

const JobCardLandingPg = ({ job }) => {
  const navigator = useNavigate();
  // console.log(job)
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];

  return (
    <div
      class="py-3 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col shadow-2xl"
      onClick={() => {
        navigator(`/jobs/${job.id}`);
      }}
    >
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        {job.employer.company_logo ? (
          <img
            src={job.employer.company_logo}
            alt=""
            className="profile-picture m-4"
          />
        ) : (
          <h1
            className="px-8 py-8 my-2 mx-2 text-light"
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
      <div class="flex-grow sm:text-left sm:mt-0">
        <h1 class="text-black text-2xl title-font font-bold">{job.title}</h1>

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
              <p class="title-font font-medium">{job.employer.company_name}</p>
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
              <p class="title-font font-medium">{job.job_type}</p>
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
              <p class="title-font font-medium">{job.estimated_salary}</p>
            </div>
          </div>
        </div>
        <div class="md:flex font-bold text-gray-800">
          <p class="leading-relaxed text-sm">{job.description_summary}</p>
        </div>
      </div>
    </div>

    // <div
    //   class="card js-card mb-4"
    //   style={{ width: 800 }}
    //   onClick={() => {
    //     navigator(`/jobs/${job.id}`);
    //   }}
    // >
    //   <div className="d-flex align-items-center justify-content-start">
    //     {job.employer.company_logo ? (
    //       <img
    //         src={job.employer.company_logo}
    //         alt=""
    //         className="profile-picture m-4"
    //       />
    //     ) : (
    //       <h1
    //         className="px-4 py-2 my-2 mx-3 text-light"
    //         style={{
    //           backgroundColor:
    //             randColors[Math.floor(Math.random() * randColors.length)],
    //           borderRadius: "10px",
    //         }}
    //       >
    //         {job.employer.company_name.charAt(0)}
    //       </h1>
    //     )}

    //     <div>
    //       <h6 className="text-left">{job.title}</h6>
    //       <span className="me-4">{job.employer.company_name}</span>
    //       <span className="me-4">{job.job_type}</span>
    //       <span className="me-4">{job.estimated_salary}</span>
    //     </div>
    //   </div>
    //   <p className="text-left ps-4">{job.description_summary}</p>
    // </div>
  );
};

export default JobCardLandingPg;
