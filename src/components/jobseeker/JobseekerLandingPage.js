import React, { useEffect, useState } from "react";
import JobseekerNavbar from "./JobseekerNavbar";
import "./Jobseeker.css";
import JobCardLandingPg from "./JobCardLandingPg";
import { Routes, Route } from "react-router-dom";
import JobsApplied from "./JobsApplied";
import Navbar from "../LandingHomePage/Navbar";
import Footer from "../LandingHomePage/Footer";

const JobseekerLandingPage = ({ jobseeker }) => {
  // const [user, setUser]=useState(jobseeker)
  // console.log(jobseeker);
  // const [id, setId]= useState(jobseeker.id)
  const id = 1;
  const [profileData, setProfileData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [AllJobs, setAllJobs] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredTag, setFilteredTag] = useState("All");
  let applications = profileData.applications;
  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setProfileData(data);
          setTags(data.tags);
          
        });
      }
    });
  }, []);
  useEffect(()=>{
    if (AllJobs.length > 0) {
      let result = AllJobs.filter(
        (o1) => !applications.some((o2) => o1.id === o2.opportunity.id)
      );
      setJobs(result);
    }

  }, [AllJobs])
  
  
  // console.log()
  // console.log(AllJobs)
  // console.log(profileData.applications);
  const [search, setSearch] = useState("");
  // console.log(profileData);
  // Updates search words
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
      console.log(opps)
      setAllJobs(opps);
    } else if (filteredTag !== "All" && profileData["id"] !== undefined) {
      console.log(filteredTag)
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
  console.log(profileData["id"])

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
  
  // console.log()
  function handleFilter(selected){
    setFilteredTag(selected)
    // jobs.filter(job=>{console.log(jobs)})
    // console.log(profileData.tags.filter(tag=>tag.name=selected))
    
  }

  return (
    <>
      <div>
        <JobseekerNavbar />
        <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              class="absolute left-0 hidden h-1/3 text-white transform -translate-x-1/2 lg:block"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z"></path>
            </svg>
            <img
              class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-3/4"
              src="https://img.freepik.com/premium-vector/home-office-freelancer-working-from-house_316839-4061.jpg?size=626&ext=jpg"
              alt=""
            />
          </div>
          <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ">
            <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                AT WERA
              </p>
              <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Everything you
                <br class="hidden md:block me-2 " />
                <span className="inline-block mt-2">can imagine</span>
                <br />
                <span class="inline-block text-deep-purple-accent-400 mt-2">
                  is real
                </span>
              </h2>
              <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Discover your dream job by browsing our latest jobs openings to
                view & apply to the best jobs today
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-1">
          <div class="">
            <div className="w-3/4 mx-auto">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 pb-3">Filter Industry</div>
                  <div class="my-4 bg-gray-600 h-[1px]"></div>
                  <form action="">
                    <div class="flex items-center mb-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onChange={() => handleFilter("All")}
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        All
                      </label>
                    </div>
                    {tags.length > 0
                      ? tags.map((tag) => (
                          <div class="flex items-center mb-4">
                            <input
                              id="default-radio-1"
                              type="radio"
                              value=""
                              name="default-radio"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              onChange={() => handleFilter(tag.name)}
                            />
                            <label
                              for="default-radio-1"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {tag.name}
                            </label>
                          </div>
                        ))
                      : "Not Selected"}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div>
              <div class="bg-gray-100">
                <div class="bg-gray-100 flex justify-center items-center">
                  <div
                    class="container mx-auto rounded-lg p-3"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(5, 27, 44, 0.9),rgba(5, 27, 44, 0.95), #051b2c), url(https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=600)",
                      backgroundSize: "cover",
                    }}
                  >
                    <form>
                      <h1 class="text-center font-bold text-white text-4xl">
                        Look for jobs here
                      </h1>
                      <p class="mx-auto text-white font-normal text-sm my-6 max-w-lg">
                        You can search or filter by industry.
                      </p>
                    </form>
                  </div>
                </div>
                <div class="my-3 px-10">
                  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      type="search"
                      class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg- bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search by title, name or keyword"
                      aria-label="Search"
                      aria-describedby="button-addon1"
                      value={search}
                      onChange={handleSearch}
                    />

                    <button
                      class="relative z-[2] flex items-center rounded-r  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg "
                      style={{ backgroundColor: "#0D2644" }}
                      type="button"
                      id="button-addon1"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <div class="text-gray-600 body-font text-left">
                    <div class="container px-3 py-10 mx-auto">
                      {AllJobs.length > 0 ? (
                        found.map((job) => <JobCardLandingPg job={job} />)
                      ) : (
                        <p>
                          Kindly visit later to view more jobs or you have not
                          selected any tags
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="header">
          <div className="blue text-light p-5 text-left">
            {jobseeker ? (
              <h6 className="">Hello, {jobseeker.full_name}</h6>
            ) : null}

            <div className="row">
              <div className="col-10">
                <h2 className="display-3 fw-bold">Discover Your Dream Job</h2>
                <p>
                  Looking for jobs? Browse our latest jobs openings to view &
                  apply to the best jobs today
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div> */}
      </div>
      <Footer />
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
            <div class="card ps-4" style={{ width: 250 }}>
              <div class="card-body text-start">
                <h5 class="card-title">Filter</h5>
                <h6 class="card-subtitle mb-2 text-muted mt-3">Job Type</h6>

              <div>
                <label class="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span class="checkmark me-3"></span>
                </label>
                <span>Full Time</span>
              </div>
              <div>
                <label class="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span class="checkmark me-3"></span>
                </label>
                <span>Part Time</span>
              </div>
              <div>
                <label class="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span class="checkmark me-3"></span>
                </label>
                <span>Intenship</span>
              </div>
              <div>
                <label class="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span class="checkmark me-3"></span>
                </label>
                <span>Volunteer</span>
              </div>

                <h6 class="card-subtitle mb-2 text-muted mt-3">Industry</h6>
                
                {tags.length > 0
                  ? tags.map((tag) => (
                      <div>
                        <label class="customcheckbox m-b-20">
                          <input
                            type="checkbox"
                            id="mainCheckbox"
                            name={tag.name}
                            onChange={(event) => {
                              // console.log(event.target.checked)
                              console.log(event.target.name);
                            }}
                          />
                          <span class="checkmark me-3"></span>
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
                <div class="input-group rounded m-auto">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search job title or company or keyword"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={search}
                    onChange={handleSearch}
                  />
                  <span class=" border-0" id="search-addon">
                    <i class="fas fa-search p-2"></i>
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
