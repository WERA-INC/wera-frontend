import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import DashboardSelection from "./DashboardSelection";
import Tabledata from "./Tabledata";

const Dashboard = () => {
  const navigator = useNavigate();
  const [summary, setSummary] = useState([]);
  const [slug, setSlug] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/all_summaries`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setSummary(data);
        });
      }
    });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/${slug}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setData(data));
      }
    });
  }, [slug]);
  const [filtered, setFiltered] = useState([]);
  const [keys, setKeys] = useState([]);
  //  let { slug } = useParams();
  //  console.log(slug)

  //  let keys = data.map((obj)=>{console.log(Object.keys(obj));})
  //  console.log(keys[0])
  useEffect(() => {
    if (data.length > 0) {
      //  console.log(Object.keys(data[0]));
      if (slug === "profiles") {
        let selected = data.map((object) => {
          return (({ created_at, full_name, phone_number, email_address }) => ({
            created_at,
            full_name,
            phone_number,
            email_address,
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "opportunities") {
        let selected = data.map((object) => {
          return (({
            created_at,
            title,
            job_type,
            cut_off,
            estimated_salary,
          }) => ({ created_at, title, job_type, cut_off, estimated_salary }))(
            object
          );
        });
        setFiltered(selected);
      } else if (slug === "employers") {
        let selected = data.map((object) => {
          return (({
            created_at,
            company_name,
            company_location,
            email_address,
          }) => ({
            created_at,
            company_name,
            company_location,
            email_address,
          }))(object);
        });
        setFiltered(selected);
      } else {
        let selected = data.map((object) => {
          return (({ created_at, applicant, title, company_name }) => ({
            created_at,
            applicant,
            title,
            company_name,
          }))(object);
        });
        setFiltered(selected);
      }
    }
  }, [data]);
  console.log(filtered[0]);
  console.log(slug);
  // let keys= Object.keys(filtered[0])
  useEffect(() => {
    if (filtered[0] !== undefined) {
      setKeys(Object.keys(filtered[0]));
    }
  }, [filtered]);
  // console.log("full_name".split("_").length);
  console.log(keys);

  return (
    <>
      <div class="grid grid-cols-6">
        <div class="col-start-1 col-end-2 bg-blue-600">
          <div className="dashboard-body"></div>
          <div class="bg-blue-600">
            <span
              class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
              onclick="openSidebar()"
            >
              <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
              <div class="text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center">
                  <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                  <h1 class="font-bold text-gray-200 text-[15px] ml-3">Wera</h1>
                  <i
                    class="bi bi-x cursor-pointer ml-28 lg:hidden"
                    onclick="openSidebar()"
                  ></i>
                </div>
                <div class="my-2 bg-gray-600 h-[1px]"></div>
              </div>

              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-house-door-fill"></i>
                <span
                  class="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("");
                  }}
                >
                  Dashboard
                </span>
              </div>
              <div class="my-4 bg-gray-600 h-[1px]"></div>
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-bookmark-fill"></i>
                <span
                  class="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("profiles");
                  }}
                >
                  Jobseekers
                </span>
              </div>
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-bookmark-fill"></i>
                <span
                  class="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("employers");
                  }}
                >
                  Employers
                </span>
              </div>
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-bookmark-fill"></i>
                <span
                  class="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("opportunities");
                  }}
                >
                  Jobs
                </span>
              </div>
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-bookmark-fill"></i>
                <span
                  class="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("applications");
                  }}
                >
                  Applications
                </span>
              </div>
              <div class="my-4 bg-gray-600 h-[1px]"></div>

              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i class="bi bi-box-arrow-in-right"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-end-7 col-span-5 bg-blue-600 dashboard-main px-5 text-blue-950 ">
          {/* start */}
          {slug === "" ? (
            <div>
              <h2 className="text-light pt-4">SUMMARY</h2>
              <div class="flex items-center justify-center">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 p-5">
                  <div class="relative bg-white bg-opacity-25 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <p class="text-xl text-white font-semibold my-2">
                        Job Seekers
                      </p>

                      <div class=" ">
                        <p className="text-6xl text-center text-gray-400">
                          {summary.profiles}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="relative bg-white bg-opacity-25 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <p class="text-xl text-white font-semibold my-2">
                        Employers
                      </p>

                      <div class=" ">
                        <p className="text-6xl text-center text-gray-400">
                          {summary.employers}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="relative bg-white bg-opacity-25 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <p class="text-xl text-white font-semibold my-2">Jobs</p>

                      <div class=" ">
                        <p className="text-6xl text-center text-gray-400">
                          {summary.opportunities}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="relative bg-white bg-opacity-25 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <p class="text-xl text-white font-semibold my-2">
                        Applications
                      </p>

                      <div class=" ">
                        <p className="text-6xl text-center text-gray-400">
                          {summary.applications}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="antialiased font-sans bg-gray-200 px-5 ms-20 mt-4">
              <div class="container px-4 sm:px-8">
                <div class="py-8">
                  <div>
                    <h2 class="text-2xl font-semibold leading-tight text-capitalize">
                      {slug == "profiles"
                        ? "Job Seekers"
                        : slug == "opportunities"
                        ? "Jobs"
                        : slug}
                    </h2>
                  </div>
                  <div class="my-2 flex sm:flex-row flex-col">
                    <div class="block relative">
                      <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg
                          viewBox="0 0 24 24"
                          class="h-4 w-4 fill-current text-gray-500"
                        >
                          <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                        </svg>
                      </span>
                      <input
                        placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table class="min-w-full leading-normal">
                        <thead>
                          <tr>
                            {keys.map((key) => (
                              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {key.split("_").length > 1
                                  ? key.split("_").join(" ")
                                  : key}
                              </th>
                            ))}
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filtered.map((val) => {
                            return <Tabledata val={val} />;
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <DashboardSelection data={data}/> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
// <div className="admin-land">
//   <nav
//     className="navbar container d-flex align-items-center justify-content-between"
//     id="navtitle"
//   >
//     <h4 href="#" className="me-3">
//       WERA
//     </h4>
//     <div className="right-nav">
//       <button
//         className="py-2 px-3 blue text-light rounded"
//         onClick={() => {
//           navigator("/login");
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   </nav>

//   <div className="container">
//     <div className="row">
//       <div className="col-lg-8 col-12 mx-auto">
//         <div className="row ps-md-5">
//           <div
//             className="col-md-6 mb-3"
//             onClick={() => {
//               navigator(`/admin-dashboard/${"profiles"}`);
//             }}
//             style={{ width: "250", cursor: "pointer" }}
//           >
//             <div class="card card-hover">
//               <div className="d-flex align-items-center justify-content-between brown px-3">
//                 <i class="bi bi-people-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.profiles}</h1>
//                   <h3>Job Seekers</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i class="bi bi-arrow-right-circle-fill h1"></i>
//               </div>
//             </div>
//           </div>
//           <div
//             className="col-md-6 mb-3"
//             onClick={() => {
//               navigator(`/admin-dashboard/${"employers"}`);
//             }}
//             style={{ width: "250", cursor: "pointer" }}
//           >
//             <div class="card card-hover">
//               <div className="d-flex align-items-center justify-content-between green px-3">
//                 <i class="bi bi-houses-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.employers}</h1>
//                   <h3>Employers</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i class="bi bi-arrow-right-circle-fill h1"></i>
//               </div>
//             </div>
//           </div>
//           <div
//             className="col-md-6 mb-3"
//             onClick={() => {
//               navigator(`/admin-dashboard/${"opportunities"}`);
//             }}
//             style={{ width: "250", cursor: "pointer" }}
//           >
//             <div class="card card-hover">
//               <div className="d-flex align-items-center justify-content-between blue px-3">
//                 <i class="bi bi-clipboard2-data-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.opportunities}</h1>
//                   <h3>Jobs</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i class="bi bi-arrow-right-circle-fill h1"></i>
//               </div>
//             </div>
//           </div>
//           <div
//             className="col-md-6 mb-3"
//             onClick={() => {
//               navigator(`/admin-dashboard/${"applications"}`);
//             }}
//             style={{ width: "250", cursor: "pointer" }}
//           >
//             <div class="card card-hover">
//               <div className="d-flex align-items-center justify-content-between pink px-3">
//                 <i class="bi bi-bar-chart-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.applications}</h1>
//                   <h3>Job Applications</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i class="bi bi-arrow-right-circle-fill h1"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
