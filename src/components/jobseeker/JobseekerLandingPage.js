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
  console.log(jobseeker)
  // const [id, setId]= useState(jobseeker.id)
  const id=2
  const[profileData, setProfileData]=useState([])
  const [jobs, setJobs] = useState([]);
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags]= useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setProfileData(data);
          setTags(data.tags)
          let opps = [];
          data.tags.map((tag) => {
            tag.opportunities.map((opp) => {
              opps.push(opp);
            });
          });
          setJobs(opps);
          
        });
      }
    });
  }, []);
  // console.log(profileData.tags);
   const [search, setSearch] = useState("");
   console.log(profileData)
   // Updates search words
   function handleSearch(event) {
     setSearch(event.target.value);
   }
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
// console.log(found)
  return (
    <>
      <div>
        <JobseekerNavbar />
        <div className="header">
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
        </div>
        <div className="row mt-5 ps-2">
          <div className="col-3">
            <div class="card ps-4" style={{ width: 250 }}>
              <div class="card-body text-start">
                <h5 class="card-title">Filter</h5>
                {/* <h6 class="card-subtitle mb-2 text-muted mt-3">Job Type</h6>

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
              </div> */}

                <h6 class="card-subtitle mb-2 text-muted mt-3">Industry</h6>
                {/* {job.tags.map((tag) => (
                <span className="ms-2">{tag.name}</span>
              ))} */}
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
          {/* main */}
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
              {/* <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <Routes>
        <Route path="/jobsapplied" element={<JobsApplied />} />
      </Routes>
    </>
  );
};

export default JobseekerLandingPage;
