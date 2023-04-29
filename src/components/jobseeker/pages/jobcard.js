import React, { useState, useEffect } from "react";
import JobseekerNavbar from "../jobseekernavbar";
import { useParams, useNavigate } from "react-router";

const JobCard = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [profileData, setProfileData] = useState({});
  const [hasApplied, setHasApplied] = useState(false);
  const navigator = useNavigate();
  const [job, setJob] = useState(null);
  const [profileId, setProfileId] = useState(null);
  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    const adminId = localStorage.getItem("adminId");
    // if(jsId){
    //   console.log("js is present")
    // }else if(adminId){
    //   console.log("admin is present")
    // }

    // console.log(jsId);
    setProfileId(jsId);
  }, []);

  let { id } = useParams();
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];
  // console.log(id);
  useEffect(() => {
    if (profileId !== null) {
      fetch(`http://localhost:3000/profiles/${profileId}`).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setProfileData(data);
          });
        }
      });
    }
  }, []);
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

  function handleApply() {
    const applicationData = {
      profile_id: profileId,
      opportunity_id: parseInt(id),
    };

    // console.log(applicationData)

    fetch("http://localhost:3000/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setShowAlert(true);
        // navigator("/jobsapplied");
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    if (profileData["id"] !== undefined) {
      let applications = profileData.applications;
      const answer = applications.filter((element) => {
        return element.opportunity.id == job.id;
      });
      console.log(answer.length);
      if (answer.length == 0) {
        setHasApplied(true);
      }
    }
  }, [profileData]);
  console.log(profileData);

  return (
    <>
      <div className="relative">        
        {showAlert ? (
          <div
            className={
              "fixed top-0 left-0 right-0 text-green-800 px-6 py-4 border-0 rounded mb-4 bg-green-50"
            }
          >
            <span className="text-xl inline-block mr-5 align-middle">
              <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">Successful Application! </b>
              Your resume and profile will be sent to the employer
            </span>
            <button
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
              onClick={() => setShowAlert(false)}
            >
              <span>×</span>
            </button>
          </div>
        ) : null}
        {job ? (
          <>
            <header>
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(5, 27, 44, 0.9),rgba(5, 27, 44, 0.95), #051b2c), url(https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=600)",
                  backgroundSize: "cover",
                  minHeight: "20vh",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                      <h1 className="mb-6 text-5xl font-bold"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="grid grid-cols-3 gap-1 mt-3">
              <div className="relative">
                {job.employer.company_logo ? (
                  <div
                    className="logo-jobcard"
                    style={{
                      width: "200px",
                      height: "200px",
                      position: "absolute",
                      top: "-10%",
                      left: "15%",

                      fontSize: "150px",
                    }}
                  >
                    <img
                      src={job.employer.company_logo}
                      alt=""
                      className="profile-picture m-4"
                    />
                  </div>
                ) : (
                  <h1
                    className="text-light m-5 text-center"
                    style={{
                      backgroundColor:
                        randColors[
                          Math.floor(Math.random() * randColors.length)
                        ],
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
                    className="max-w-sm rounded overflow-hidden shadow-lg text-white relative"
                    style={{ backgroundColor: "#0D2644" }}
                  >
                    <div className="px-6 py-4 ">
                      <div className="">
                        <h4 className="uppercase rounded-full">
                          {job.employer.company_name}
                        </h4>
                        {/* <h2 className="card-title fw-bold mb-3">
                        {job.employer.company_name}
                      </h2> */}
                        <div className="my-4 bg-gray-600 h-[1px]"></div>
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
                        {!hasApplied ? null : (
                          <button
                            className="text-dark py-2 px-3 mt-2 bg-light rounded"
                            onClick={handleApply}
                          >
                            APPLY
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-gray-200">
                <div>
                  <div className="bg-gray-100">
                    <div className="">
                      <div
                        className="mb-4 text-left p-4"
                        style={{ width: "100%" }}
                      >
                        <h4 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          {job.title}
                        </h4>
                        <h5 className="inline-block font-semibold tracking-wide text-gray-900 uppercase rounded-full">
                          About the company
                        </h5>
                        {/* <h4 className="">About the company</h4> */}
                        <p className="mb-4">
                          {job.employer.company_description}
                        </p>
                        <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          Job Description
                        </h5>
                        <p className="text-base mb-4">{job.description}</p>

                        <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          Responsibilities
                        </h5>
                        <ul className="mb-4">
                          <li className="mt-2">
                            <i className="bi bi-arrow-up-right-circle-fill me-3 text-sm "></i>
                            {job.responsibilities}
                          </li>
                        </ul>
                        <h5 className="font-semibold tracking-wide text-gray-900 uppercase rounded-full mb-4">
                          Minimum Qualifications
                        </h5>
                        <ul>
                          <li className="mt-2">
                            <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
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
      </div>
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
//           <div className="card company-profile" style={{ width: 300 }}>
//             <div className="card-body bluey text-light">
//               <h2 className="card-title fw-bold mb-3">
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
//               className="card js-card mb-4 text-left p-4"
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
//                   <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
//                   {job.responsibilities}
//                 </li>
//               </ul>
//               <h4 className="">Minimum Qualifications</h4>
//               <ul>
//                 <li className="mt-2">
//                   <i className="bi bi-arrow-up-right-circle-fill me-3"></i>
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
