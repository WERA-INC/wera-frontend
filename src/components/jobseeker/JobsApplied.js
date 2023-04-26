import React, { useState, useEffect } from "react";
import JobAppliedCard from "./JobAppliedCard";
import JobseekerNavbar from "./JobseekerNavbar";

const JobsApplied = ({ jobseeker }) => {
  //  const [id, setId] = useState(jobseeker.id);
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
  console.log(found);
  return (
    <>
      <div>
        <JobseekerNavbar />
        <div className="container">
          <div class="my-3 px-10 w-1/2 mx-auto">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg- bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search by job title or company name"
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
          <h5 className="py-3">Your Application History</h5>
          <div className="container p-4">
            <div className="grid grid-cols-3 gap-3">
              {applications.length > 0 ? (
                found.map((application) => (
                  <JobAppliedCard application={application} />
                ))
              ) : (
                <p>You have not applied for any jobs</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <JobseekerNavbar />
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-6 m-auto">
    //         <div class="input-group rounded m-auto">
    //           <input
    //             type="search"
    //             class="form-control rounded"
    //             placeholder="Search job title or keyword"
    //             aria-label="Search"
    //             aria-describedby="search-addon"
    //             value={search}
    //             onChange={handleSearch}
    //           />
    //           <span
    //             class="input-group-text border-0 blue text-light"
    //             id="search-addon"
    //           >
    //             Search
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <h5 className="py-3">Your Application History</h5>
    //     <div className="row">
    //       {applications.length > 0 ? (
    //         found.map((application) => (
    //           <JobAppliedCard application={application} />
    //         ))
    //       ) : (
    //         <p>You have not applied for any jobs</p>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default JobsApplied;
