import React, { useEffect, useState } from "react";
import JobseekerNavbar from "../jobseekernavbar";
import "../Jobseeker.css";
import JobCardLandingPg from "./jobscard";
import { Routes, Route, useNavigate } from "react-router-dom";
import JobsApplied from "./jobsapplied";
// import Navbar from "../LandingHomePage/Navbar";
import { RightArrowIcon, SearchIcon } from "../../icons";

const JobseekerLandingPage = ({ jobseeker }) => {
  // const [user, setUser]=useState(jobseeker)
  // console.log(jobseeker);
  const [id, setId] = useState(null);
  const navigator = useNavigate();
  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    console.log(jsId);
    setId(jsId);
  }, []);
  // const id = 1;
  const [profileData, setProfileData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [AllJobs, setAllJobs] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredTag, setFilteredTag] = useState("All");
  let applications = profileData.applications;
  useEffect(() => {
    if (id !== null) {
      fetch(`http://localhost:3000/profiles/${id}`).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            setProfileData(data);
            setTags(data.tags);
          });
        }
      });
    }
  }, [id]);
  useEffect(() => {
    if (AllJobs.length > 0) {
      let result = AllJobs.filter(
        (o1) => !applications.some((o2) => o1.id === o2.opportunity.id)
      );
      setJobs(result);
    }
  }, [AllJobs]);

  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    if (filteredTag == "All" && profileData["id"] !== undefined) {
      console.log("all");
      let opps = [];
      profileData.tags.map((tag) => {
        tag.opportunities.map((opp) => {
          opps.push(opp);
        });
      });
      console.log(opps);
      setAllJobs(opps);
    } else if (filteredTag !== "All" && profileData["id"] !== undefined) {
      console.log(filteredTag);
      // let opps = [];
      profileData.tags.map((tag) => {
        if (tag.name == filteredTag) {
          setAllJobs(tag.opportunities);
        }
      });
      // console.log(filteredTag);
      // console.log(opps);
      // setAllJobs(opps);
    }
  }, [profileData, filteredTag]);
  console.log(profileData.full_name);

  // The editor can search for an job since the jobs can be many to sort through visually, and jobs stored in variable found
  let found = jobs.filter((job) => {
    let jobName = job.title.toLocaleLowerCase();
    let jobCompany = job.employer.company_name.toLocaleLowerCase();
    let jobDescription = job.description.toLocaleLowerCase();

    if (search === "") {
      return true;
    } else if (
      jobName.includes(search) ||
      jobDescription.includes(search) ||
      jobCompany.includes(search)
    ) {
      return job;
    }
  });
  function handleFilter(selected) {
    setFilteredTag(selected);
  }

  return (
    <>
      <div>
        <div className="grid grid-cols-8 gap-1">
          <div className="col-span-2">
            <div className="w-full  px-4 mx-auto mb-10 ">
              <img
                className="object-cover w-full rounded shadow-lg"
                src="https://img.freepik.com/premium-vector/home-office-freelancer-working-from-house_316839-4061.jpg?size=626&ext=jpg"
                alt=""
              />
            </div>
            <div className="w-3/4 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-4 py-2">
                  {tags.length == 0 ? (
                    <h6 className="uppercase">Select an industry</h6>
                  ) : (
                    <div className="font-bold text-xl mb-2 pb-3">
                      Filter Industry
                    </div>
                  )}

                  <div className="mb-4 bg-gray-600 h-[1px]"></div>
                  <form action="">
                    {tags.length == 0 ? null : (
                      <div className="flex items-center mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={() => handleFilter("All")}
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          All
                        </label>
                      </div>
                    )}

                    {tags.length > 0 ? (
                      tags.map((tag) => (
                        <div className="flex items-center mb-4">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => handleFilter(tag.name)}
                          />
                          <label
                            htmlFor="default-radio-1"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {tag.name}
                          </label>
                        </div>
                      ))
                    ) : (
                      <>
                        <p>
                          Please click the button below to update your profile
                          by selecting the industry to view the jobs
                        </p>

                        <button
                          className="relative z-[2] flex items-center rounded mx-auto  px-6 py-2.5 text-xs uppercase"
                          style={{ backgroundColor: "#0D2644" }}
                          onClick={() => {
                            navigator("/jobseekerprofile");
                          }}
                        >
                          <RightArrowIcon />
                          To Profile
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div>
              <div className="bg-gray-100">
                <div className="bg-gray-100 flex justify-center items-center">
                  <div
                    className="container mx-auto rounded-b p-3"
                    style={{ backgroundColor: "#0D2644" }}
                  >
                    <form>
                      <h1 className="text-center font-bold text-white text-4xl">
                        Browse for latest jobs here
                      </h1>
                      <p className="mx-auto text-white font-normal text-sm my-6 max-w-lg">
                        You can search or filter by industry.
                      </p>
                    </form>
                  </div>
                </div>
                <div className="my-3 ps-3 mx-auto">
                  <div className=" block relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      className=" w-1/2 rounded-l border border-solid border-neutral-300 outline-none "
                      placeholder="Search by title, name or keyword"
                      value={search}
                      onChange={handleSearch}
                    />
                    <button
                      className=" rounded-r  px-6 py-2.5 text-xs text-white"
                      style={{ backgroundColor: "#0D2644" }}
                    >
                      <SearchIcon />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-gray-600 body-font text-left">
                    <div className="container px-3  mx-auto">
                      {jobs.length == 0 ? null : (
                        <h4 className="mb-3 text-center">
                          Recommended for you
                        </h4>
                      )}
                      {jobs.length > 0 ? (
                        found.map((job) => <JobCardLandingPg job={job} />)
                      ) : (
                        <p className="text-center pb-4 text-gray-850">
                          Kindly visit later to view more jobs or you have not
                          selected any industry
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-8">
        <div className="bg-pink-600 col-span-2">one</div>
        <div className="bg-blue-600 col-span-6">two</div>
      </div> */}

      <Routes>
        <Route path="/jobsapplied" element={<JobsApplied />} />
      </Routes>
    </>
  );
};

export default JobseekerLandingPage;
{
  /* <div className="row mt-5 ps-2">
          <div className="col-3">
            <div className="card ps-4" style={{ width: 250 }}>
              <div className="card-body text-start">
                <h5 className="card-title">Filter</h5>
                <h6 className="card-subtitle mb-2 text-muted mt-3">Job Type</h6>

              <div>
                <label className="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span className="checkmark me-3"></span>
                </label>
                <span>Full Time</span>
              </div>
              <div>
                <label className="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span className="checkmark me-3"></span>
                </label>
                <span>Part Time</span>
              </div>
              <div>
                <label className="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span className="checkmark me-3"></span>
                </label>
                <span>Intenship</span>
              </div>
              <div>
                <label className="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span className="checkmark me-3"></span>
                </label>
                <span>Volunteer</span>
              </div>

<<<<<<< HEAD
                <h6 class="card-subtitle mb-2 text-muted mt-3">Industry</h6>

=======
                <h6 className="card-subtitle mb-2 text-muted mt-3">Industry</h6>
                
>>>>>>> origin/review
                {tags.length > 0
                  ? tags.map((tag) => (
                      <div>
                        <label className="customcheckbox m-b-20">
                          <input
                            type="checkbox"
                            id="mainCheckbox"
                            name={tag.name}
                            onChange={(event) => {
                              // console.log(event.target.checked)
                              console.log(event.target.name);
                            }}
                          />
                          <span className="checkmark me-3"></span>
                        </label>
                        <span>{tag.name}</span>
                      </div>
                    ))
                  : "Not Selected"}
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="row">
              <div className="col-9">
                <div className="input-group rounded m-auto">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search job title or company or keyword"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={search}
                    onChange={handleSearch}
                  />
                  <span className=" border-0" id="search-addon">
                    <i className="fas fa-search p-2"></i>
                  </span>
                </div>
              </div>
            </div>
            <h5 className="py-3 text-start ">Recommended For You</h5>
            <div className="mb-5">
              {jobs.length > 0 ? (
                found.map((job) => <JobCardLandingPg job={job} />)
              ) : (
                <p>You have not selected any tags</p>
              )}

            </div>
          </div>
        </div> */
}
