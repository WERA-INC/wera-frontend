import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import DashboardSelection from "./DashboardSelection";
import Tabledata from "./Tabledata";
import Logo from "../images/Logo5.png";

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
          return (({ full_name, phone_number, email_address, created_at }) => ({
            full_name,
            phone_number,
            email_address,
            created_at
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "opportunities") {
        let selected = data.map((object) => {
          return (({ title, job_type, estimated_salary, created_at }) => ({
            title,
            job_type,
            estimated_salary,
            created_at,
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "employers") {
        let selected = data.map((object) => {
          return (({
            company_name,
            company_location,
            email_address,
            created_at,
          }) => ({
            company_name,
            company_location,
            email_address,
            created_at,
          }))(object);
        });
        setFiltered(selected);
      } else {
        let selected = data.map((object) => {
          return (({ applicant, title, company_name, created_at }) => ({
            applicant,
            title,
            company_name,
            created_at,
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
        <div class="col-start-1 col-end-2 bg-sky-200">
          <div className=""></div>
          <div class="bg-sky-200">
            <span
              class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
              onclick="openSidebar()"
            >
              <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center dashboard-main">
              <div class="text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center">
                  <img
                    src={Logo}
                    alt="wera"
                    href="/landingpage"
                    className="md:cursor-pointer h-20 "
                  />
                </div>
                <div class="my-2 bg-gray-600 h-[1px]"></div>
              </div>

              <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("");
                }}
              >
                <i class="bi bi-house-door-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Dashboard
                </span>
              </div>
              <div class="my-4 bg-gray-600 h-[1px]"></div>
              <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
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
              <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("employers");
                }}
              >
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Employers
                </span>
              </div>
              <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("opportunities");
                }}
              >
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Jobs
                </span>
              </div>
              <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("applications");
                }}
              >
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Applications
                </span>
              </div>
              <div class="my-4 bg-gray-600 h-[1px]"></div>

              <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  navigator("/login");
                }}
              >
                <i class="bi bi-box-arrow-in-right"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-end-7 col-span-5  px-5 "
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.9),rgba(0,0,0.95,1), #051b2c), url(https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          {/* start */}
          {slug === "" ? (
            <div>
              <h2 className="text-gray-200 pt-3">SUMMARY</h2>
              <div class="flex items-center justify-center">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 p-5 ">
                  <div class="relative bg-gray-200  py-6 px-6 rounded-3xl w-64 my-4 shadow-xl ">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        class="w-9 h-9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <div class=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.profiles}
                        </p>
                      </div>
                      <p class="text-xl font-semibold my-2 text-blue-950">
                        Job Seekers
                      </p>
                    </div>
                  </div>

                  <div class="relative bg-gray-200 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        class="w-9 h-9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <div class=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.employers}
                        </p>
                      </div>
                      <p class="text-xl font-semibold my-2 text-blue-950">
                        Employers
                      </p>
                    </div>
                  </div>

                  <div class="relative bg-gray-200 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-9 h-9"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                          clip-rule="evenodd"
                        />
                        <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <div class=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.opportunities}
                        </p>
                      </div>
                      <p class="text-xl font-semibold my-2 text-blue-950">
                        Jobs
                      </p>
                    </div>
                  </div>

                  <div class="relative bg-gray-200 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        class="w-9 h-9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <div class=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.applications}
                        </p>
                      </div>
                      <p class="text-xl font-semibold my-2 text-blue-950">
                        Applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="antialiased font-sans text-white px-5 ms-20 mt-4">
              <div class="container px-4 sm:px-8">
                <div class="py-8">
                  <div>
                    <h2 class="text-2xl font-semibold leading-tight uppercase">
                      {slug == "profiles"
                        ? "Job Seekers"
                        : slug == "opportunities"
                        ? "Jobs"
                        : slug}
                    </h2>
                  </div>
                  {/* <div class="my-2 flex sm:flex-row flex-col">
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
                  </div> */}
                  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table class="min-w-full leading-normal">
                        <thead>
                          <tr>
                            {keys.map((key) => (
                              <th class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 capitalize tracking-wider">
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
