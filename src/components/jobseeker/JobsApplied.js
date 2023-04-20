import React from 'react'
import JobAppliedCard from './JobAppliedCard';
import JobseekerNavbar from './JobseekerNavbar';

const JobsApplied = () => {
  return (
    <div>
      <JobseekerNavbar />
      <div className="container">
        <div className="row">
          <div className="col-6 m-auto">
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
        <h5 className="py-3">Your Application History</h5>
        <div className='row'>
          <JobAppliedCard />
          <JobAppliedCard />
          <JobAppliedCard />
          <JobAppliedCard />
          <JobAppliedCard />
          <JobAppliedCard />
        </div>
      </div>
    </div>
  );
}

export default JobsApplied