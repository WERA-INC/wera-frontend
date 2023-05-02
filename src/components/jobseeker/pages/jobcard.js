import React, { useState, useEffect } from "react";
import JobseekerNavbar from "../jobseekernavbar";
import { useParams, useNavigate } from "react-router";

const JobCard = () => {
  
  const [profileData, setProfileData] = useState({});
  const [hasApplied, setHasApplied] = useState(false);
  const navigator = useNavigate();
  const [job, setJob] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [showApply, setShowApply] = React.useState(false);
  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");    
    setProfileId(jsId);
  }, []);

  let { id } = useParams();
  const randColors = ["#89DAFF", "#373D20", "#70B77E", "#561F37", "#AB8476"];

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
  }, [profileId]);
  useEffect(() => {
    fetch(`http://localhost:3000/opportunities/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
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

    fetch("http://localhost:3000/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
       
        console.log("job successfully applied")
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    if (profileData["id"] !== undefined) {
      let applications = profileData.applications;
      const answer = applications.filter((element) => {
        return element.opportunity.id == job.id;
      });

      if (answer.length == 0) {
        setHasApplied(true);
      }
    }
  }, [profileData]);


  return (
    <>
      <div className="relative">
        
        {job ? (
          <>
            <header className="hidden md:block">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-3">
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
                    className="text-light m-5 text-center hidden md:block"
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
                <div className="w-3/4 mx-auto my-5 md:my-20">
                  <div
                    className="max-w-sm rounded overflow-hidden shadow-lg text-white relative"
                    style={{ backgroundColor: "#0D2644" }}
                  >
                    <div className="px-6 py-4 ">
                      <div className="">
                        <h4 className="uppercase rounded-full text-center">
                          {job.employer.company_name}
                        </h4>

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
                          <div className="flex align-items-center justify-content-center">
                            <button
                              className="bg-white text-gray-950 active:bg-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowApply(true)}
                            >
                              APPLY
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 order-first md:order-last">
                <div>
                  <div className="bg-gray-100">
                    <div className="">
                      <div
                        className="md:my-5 text-left p-4"
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

      {showApply ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500  text-gray-950 text-lg leading-relaxed">
                    Your resume and profile will be sent to the recruiter.
                    Confirm you want to apply
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowApply(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleApply();
                      setShowApply(false);
                      navigator('/jobsapplied')
                    }}
                    style={{ backgroundColor: "#0D2644" }}
                  >
                    Yes, apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default JobCard;


