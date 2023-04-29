import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Admin.css";
import { useNavigate } from "react-router-dom";
import DashboardSelection from "../DashboardSelection";
import Tabledata from "../Tabledata";

import {
  personIcon,
  buildingIcon,
  briefcaseIcon,
  filesIcon,
  searchIcon,
} from "../../icons";

const Dashboard = () => {
  const navigator = useNavigate();
  const [summary, setSummary] = useState([]);
  const [slug, setSlug] = useState("");
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
  const [found, setFound] = useState([]);

  const [search, setSearch] = useState("");
  // console.log(profileData);
  // Updates search words
  function handleSearch(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }
  // The editor can search for an application since the applications can be many to sort through visually, and applications stored in variable found

  // if(data.length!==0){
  //   let found = data.filter((element) => {
  //      let val1 = Object.values(element)[0].toLocaleLowerCase();
  //      let val2 = Object.values(element)[1].toLocaleLowerCase();
  //      let val3 = Object.values(element)[2].toLocaleLowerCase();
  //     //  let val2 = element[keys[1]].toLocaleLowerCase();
  //     //  let val3 = element[keys[2]].toLocaleLowerCase();

  //      if (search === "") {
  //        return true;
  //      } else if (
  //        val1.includes(search) ||
  //        val2.includes(search) ||
  //        val3.includes(search)
  //      ) {
  //        return element
  //      }
  //    });

  // }

  //   console.log(found)
  // console.log(data)
  //
  //  let { slug } = useParams();
  //  console.log(slug)

  useEffect(() => {
    if (data.length > 0) {
      //  console.log(Object.keys(data[0]));
      if (slug === "profiles") {
        let selected = data.map((object) => {
          return (({ full_name, phone_number, email_address, created_at }) => ({
            full_name,
            phone_number,
            email_address,
            created_at,
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

  useEffect(() => {
    if (filtered[0] !== undefined) {
      setKeys(Object.keys(filtered[0]));
    }
  }, [filtered]);

  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-start-1 col-end-2 bg-sky-200">
          <div className=""></div>
          <div className="bg-sky-200">
            <span
              className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
              onclick="openSidebar()"
            >
              <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center dashboard-main">
              <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                  <img
                    src={"/images/Logo5.png"}
                    alt="wera"
                    href="/landingpage"
                    className="md:cursor-pointer h-20 "
                  />
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>

              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("");
                }}
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Dashboard
                </span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
                <i className="bi bi-bookmark-fill"></i>
                <span
                  className="text-[15px] ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("profiles");
                  }}
                >
                  Jobseekers
                </span>
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("employers");
                }}
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Employers
                </span>
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("opportunities");
                }}
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Jobs
                </span>
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("applications");
                }}
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Applications
                </span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>

              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  navigator("/sign-up");
                }}
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-end-7 col-span-5  px-5 "
          style={{
            backgroundColor: "rgba(5, 27, 44, 0.1)",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          {/* start */}
          {/* {tickIcon} */}
          {slug === "" ? (
            <div>
              <h2 className="text-gray-200 pt-3">SUMMARY</h2>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-5 ">
                  <div className="relative bg-gray-400  py-6 px-6 rounded-3xl w-64 my-4 shadow-xl ">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.profiles}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950">
                        Job Seekers
                      </p>
                    </div>
                  </div>

                  <div className="relative bg-gray-400 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.employers}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950">
                        Employers
                      </p>
                    </div>
                  </div>

                  <div className="relative bg-gray-400 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                          clip-rule="evenodd"
                        />
                        <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                      </svg>
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.opportunities}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950">
                        Jobs
                      </p>
                    </div>
                  </div>

                  <div className="relative bg-gray-400 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.0"
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                        />
                      </svg>
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.applications}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950">
                        Applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="antialiased font-sans text-white px-5 ms-20 mt-4">
              <div className="container px-4 sm:px-8">
                <div className="py-8">
                  <div>
                    <h2 className="text-2xl text-blue-950 font-semibold leading-tight uppercase">
                      {slug == "profiles"
                        ? "Job Seekers"
                        : slug == "opportunities"
                        ? "Jobs"
                        : slug}
                    </h2>
                  </div>
                  <div className="my-3 px-10 w-2/3 mx-auto">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                      <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg- bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search "
                        aria-label="Search"
                        aria-describedby="button-addon1"
                        value={search}
                        onChange={handleSearch}
                      />

                      <button
                        className="relative z-[2] flex items-center rounded-r  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg "
                        style={{ backgroundColor: "#0D2644" }}
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
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
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            {keys.map((key) => (
                              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-sm font-semibold text-white capitalize tracking-wider">
                                {key.split("_").length > 1
                                  ? key.split("_").join(" ")
                                  : key}
                              </th>
                            ))}
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filtered.map((val) => {
                            return <Tabledata val={val} slug={slug} />;
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
//             <div className="card card-hover">
//               <div className="d-flex align-items-center justify-content-between brown px-3">
//                 <i className="bi bi-people-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.profiles}</h1>
//                   <h3>Job Seekers</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i className="bi bi-arrow-right-circle-fill h1"></i>
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
//             <div className="card card-hover">
//               <div className="d-flex align-items-center justify-content-between green px-3">
//                 <i className="bi bi-houses-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.employers}</h1>
//                   <h3>Employers</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i className="bi bi-arrow-right-circle-fill h1"></i>
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
//             <div className="card card-hover">
//               <div className="d-flex align-items-center justify-content-between blue px-3">
//                 <i className="bi bi-clipboard2-data-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.opportunities}</h1>
//                   <h3>Jobs</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i className="bi bi-arrow-right-circle-fill h1"></i>
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
//             <div className="card card-hover">
//               <div className="d-flex align-items-center justify-content-between pink px-3">
//                 <i className="bi bi-bar-chart-fill dashboard_icons text-light"></i>
//                 <div className="text-light">
//                   <h1 className="display-6">{summary.applications}</h1>
//                   <h3>Job Applications</h3>
//                 </div>
//               </div>
//               <div className="d-flex align-items-center justify-content-between bg-secondary p-2 px-3">
//                 <h6 className="text-light">View Details</h6>
//                 <i className="bi bi-arrow-right-circle-fill h1"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
