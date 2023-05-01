import React, { useEffect, useState } from "react";
import "../Jobseeker.css";
import JobCardLandingPg from "./jobscard";
import { Routes, Route, useNavigate } from "react-router-dom";
import JobsApplied from "./jobsapplied";
import { RightArrowIcon, SearchIcon } from "../../icons";

const JobseekerLandingPage = () => {
  const [id, setId] = useState(null);
  const navigator = useNavigate();
  const [profileData, setProfileData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [AllJobs, setAllJobs] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredTag, setFilteredTag] = useState("All");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const jsId = localStorage.getItem("jobseekerId");
    // console.log(jsId);
    setId(jsId);
  }, []);

  let applications = profileData.applications;
  useEffect(() => {
    if (id !== null) {
      fetch(`http://localhost:3000/profiles/${id}`).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
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

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    if (filteredTag == "All" && profileData["id"] !== undefined) {
      let opps = [];
      profileData.tags.map((tag) => {
        tag.opportunities.map((opp) => {
          opps.push(opp);
        });
      });

      setAllJobs(opps);
    } else if (filteredTag !== "All" && profileData["id"] !== undefined) {
      profileData.tags.map((tag) => {
        if (tag.name == filteredTag) {
          setAllJobs(tag.opportunities);
        }
      });
    }
  }, [profileData, filteredTag]);

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
        <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-8">
          <div className="col-span-2">
            {profileData.full_name !== undefined ? (
              <h5
                className="text-left text-gray-900 text-center
            py-2"
              >
                Hello, {profileData.full_name}
              </h5>
            ) : null}
            <div className="w-full  px-4 mx-auto mb-10 hidden md:hidden lg:block">
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
                    <div className="font-bold text-xl mb-2 pb-3 text-center">
                      Filter Industry
                    </div>
                  )}

                  <div className="mb-4 bg-gray-600 h-[1px]"></div>
                  <div className="grid grid-cols-3 lg:grid-cols-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div>
              <div className="bg-gray-100">
                <div className="bg-gray-100 flex justify-center items-center">
                  <div
                    className="container mx-auto rounded-b p-2 hidden lg:block"
                    style={{ backgroundColor: "#0D2644" }}
                  >
                    <div>
                      <h1 className="text-center font-bold text-white text-4xl">
                        Browse for latest jobs here
                      </h1>
                      <p className="mx-auto text-white text-center font-normal text-sm my-3 max-w-lg">
                        You can search or filter by industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-3 px-2  w-full md:w-3/4 lg:w-1/2 mx-auto">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg- bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search by job title or company name"
                      aria-label="Search"
                      aria-describedby="button-addon1"
                      value={search}
                      onChange={handleSearch}
                    />

                    <button
                      className="relative z-[2] flex items-center rounded-r  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg "
                      style={{ backgroundColor: "#0D2644" }}
                      type="button"
                      id="button-addon1"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <SearchIcon />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-gray-600 body-font text-left">
                    <div className="container px-3  mx-auto">
                      {jobs.length == 0 ? null : (
                        <h4 className="mb-3 text-center text-blue-950 text-lg">
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
    </>
  );
};

export default JobseekerLandingPage;
