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
        <>
          <JobseekerNavbar />
          <header>
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.4),rgba(0,0,0.95,0.4), #051b2c), url(https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150266863.jpg?size=626&ext=jpg)",
                backgroundSize: "cover",
                minHeight: "20vh",
              }}
            >
              <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                <div class="flex h-full items-center justify-center">
                  <div class="px-6 text-center text-white md:px-12">
                    <h1 class="mb-6 text-5xl font-bold">
                      {/* {job.employer.company_logo ? (
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
                              randColors[
                                Math.floor(Math.random() * randColors.length)
                              ],
                            borderRadius: "50%",
                            width: "200px",
                            height: "200px",
                            position: "absolute",
                            top: "5%",
                            left: "40%",
                            border: "10px solid white",
                            fontSize: "150px",
                          }}
                        >
                          {job.employer.company_name.charAt(0)}
                        </h1>
                      )} */}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div class="grid grid-cols-3 gap-1 mt-3">
            <div class="relative">
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
                    top: "-35%",
                    left: "15%",
                    border: "10px solid white",
                    fontSize: "150px",
                  }}
                >
                  {job.employer.company_name.charAt(0)}
                </h1>
              )}
              <div className="w-3/4 mx-auto mt-20">
                <div
                  class="max-w-sm rounded overflow-hidden shadow-lg text-white relative"
                  style={{ backgroundColor: "#0D2644" }}
                >
                  <div class="px-6 py-4 ">
                    <div class="">
                      <h2 class="inline-block px-3 font-semibold tracking-wider text-white uppercase rounded-full">
                        {job.employer.company_name}
                      </h2>
                      {/* <h2 class="card-title fw-bold mb-3">
                        {job.employer.company_name}
                      </h2> */}
                      <div class="my-4 bg-gray-600 h-[1px]"></div>
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
              </div>
            </div>
            <div class="col-span-2 bg-gray-200">
              <div>
                <div class="bg-gray-100">
                  <div className="">
                    <div class="mb-4 text-left p-4" style={{ width: "100%" }}>
                      <h4 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                        {job.title}
                      </h4>
                      <h5 class="inline-block font-semibold tracking-wide text-gray-900 uppercase rounded-full">
                        About the company
                      </h5>
                      {/* <h4 className="">About the company</h4> */}
                      <p className="mb-4">{job.employer.company_description}</p>
                      <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                        Job Description
                      </h5>
                      <p className="text-base mb-4">{job.description}</p>

                      <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                        Responsibilities
                      </h5>
                      <ul className="mb-4">
                        <li className="mt-2">
                          <i class="bi bi-arrow-up-right-circle-fill me-3 text-sm "></i>
                          {job.responsibilities}
                        </li>
                      </ul>
                      <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                        Minimum Qualifications
                      </h5>
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
          </div>
        </>
      ) : (
        "Please wait"
      )}
    </>
  );
};

export default JobCard;
// {
//   job ? (
//     <div>
//       <JobseekerNavbar />
//       <div className="header position-relative">
//         <div className="jobcard-header position-relative">
//           <img
//             src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt=""
//           />
//         </div>
//       </div>

//       {job.employer.company_logo ? (
//         <div className="logo-jobcard">
//           <img
//             src={job.employer.company_logo}
//             alt=""
//             className="profile-picture m-4"
//           />
//         </div>
//       ) : (
//         <h1
//           className="text-light m-5"
//           style={{
//             backgroundColor:
//               randColors[Math.floor(Math.random() * randColors.length)],
//             borderRadius: "50%",
//             width: "200px",
//             height: "200px",
//             position: "absolute",
//             top: "35%",
//             border: "10px solid white",
//             fontSize: "150px",
//           }}
//         >
//           {job.employer.company_name.charAt(0)}
//         </h1>
//       )}

//       <div className="row mt-5 ps-2">
//         <div className="col-3">
//           <div class="card company-profile" style={{ width: 300 }}>
//             <div class="card-body bluey text-light">
//               <h2 class="card-title fw-bold mb-3">
//                 {job.employer.company_name}
//               </h2>
//               <p className="text-left  mb-4">
//                 Date Posted: {job.created_at.split("T")[0]}
//               </p>
//               <p className="text-left  mb-4">
//                 Location: {job.employer.company_location}
//               </p>
//               <p className="text-left  mb-4 ">
//                 Industry:{" "}
//                 {job.tags.map((tag) => (
//                   <span className="ms-2">{tag.name}</span>
//                 ))}
//               </p>
//               <p className="text-left  mb-4">
//                 Estimated salary: {job.estimated_salary}
//               </p>
//               <p className="text-left  mb-4">
//                 Application Deadline: 30/12/2023
//               </p>
//               <button className="text-dark py-2 px-3 mt-2 bg-light rounded">
//                 APPLY
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="col-9">
//           <div className="col-4">
//             <div
//               class="card js-card mb-4 text-left p-4"
//               style={{ width: 1000 }}
//             >
//               <h4 className="fw-bold">{job.title}</h4>
//               <h4 className="">About the company</h4>
//               <p>{job.employer.company_description}</p>
//               <h4 className="">Job Description</h4>
//               <p>{job.description}</p>

//               <h4 className="">Responsibilities</h4>
//               <ul>
//                 <li className="mt-2">
//                   <i class="bi bi-arrow-up-right-circle-fill me-3"></i>
//                   {job.responsibilities}
//                 </li>
//               </ul>
//               <h4 className="">Minimum Qualifications</h4>
//               <ul>
//                 <li className="mt-2">
//                   <i class="bi bi-arrow-up-right-circle-fill me-3"></i>
//                   {job.qualifications}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     "Please wait"
//   );
// }
