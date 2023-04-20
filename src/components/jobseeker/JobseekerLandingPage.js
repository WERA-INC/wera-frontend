import React from 'react'
import JobseekerNavbar from './JobseekerNavbar'
import "./Jobseeker.css";
import JobCardLandingPg from './JobCardLandingPg';

const JobseekerLandingPage = () => {
  return (
    <div>
      <JobseekerNavbar />
      <div className="header">
        <div className="blue text-light p-5 text-left">
          <h6 className="">Hello, Mary</h6>
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

              <h6 class="card-subtitle mb-2 text-muted mt-3">On-site/Remote</h6>

              <div>
                <label class="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span class="checkmark me-3"></span>
                </label>
                <span>On site</span>
              </div>
              <div>
                <label class="customcheckbox m-b-20">
                  <input type="checkbox" id="mainCheckbox" />
                  <span class="checkmark me-3"></span>
                </label>
                <span>Remote</span>
              </div>
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
                  placeholder="Search job title or keyword"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span
                  class="input-group-text border-0 blue text-light"
                  id="search-addon"
                >
                  Search
                </span>
              </div>
            </div>
          </div>
          <h5 className="py-3">Recommended For You</h5>
          <div>
            <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg />
            <JobCardLandingPg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobseekerLandingPage