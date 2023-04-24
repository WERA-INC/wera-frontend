import React, {useState, useEffect} from 'react'
import JobAppliedCard from './JobAppliedCard';
import JobseekerNavbar from './JobseekerNavbar';

const JobsApplied = () => {
  const id = 1;
  
  const [applications, setApplications] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:3000/profiles/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          
          setApplications(data.applications);
        });
      }
    });
  }, []);
  console.log(applications);
  const [search, setSearch] = useState("");
  // console.log(profileData);
  // Updates search words
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  // The editor can search for an application since the applications can be many to sort through visually, and applications stored in variable found
  let found = applications.filter((application) => {
    let applicationName = application.title.toLocaleLowerCase();
    let applicationCompany = application.company_name.toLocaleLowerCase();


    if (search === "") {
      return true;
    } else if (
      applicationName.includes(search) ||
      applicationCompany.includes(search)
    ) {
      return application;
    }
  });
  console.log(found)
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
                value={search}
                onChange={handleSearch}
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
        <div className="row">
          {applications.length > 0 ? (
            found.map((application) => (
              <JobAppliedCard application={application} />
            ))
          ) : (
            <p>You have not selected any tags</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobsApplied