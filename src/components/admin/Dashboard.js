import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import DashboardSelection from "./DashboardSelection";
import Tabledata from "./Tabledata";
import Logo from "../images/Logo5.png";
import {
  personIcon,
  buildingIcon,
  briefcaseIcon,
  filesIcon,
  searchIcon,
} from "../icons";

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
      <div class="grid grid-cols-6">
        <div class="col-start-1 col-end-2">
          <div>
            <div class="fixed top-0 bottom-0 w-[300px] dashboard-main">
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
            backgroundColor: "rgba(5, 27, 44, 0.1)",
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
                  <div class="relative bg-gray-400  py-6 px-6 rounded-3xl w-64 my-4 shadow-xl ">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      {personIcon}
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

                  <div class="relative bg-gray-400 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      {buildingIcon}
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

                  <div class="relative bg-gray-400 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      {briefcaseIcon}
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

                  <div class="relative bg-gray-400 py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      {filesIcon}
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
                    <h2 class="text-2xl text-blue-950 font-semibold leading-tight uppercase">
                      {slug == "profiles"
                        ? "Job Seekers"
                        : slug == "opportunities"
                        ? "Jobs"
                        : slug}
                    </h2>
                  </div>
                  <div class="my-3 px-10 w-2/3 mx-auto">
                    <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                      <input
                        type="search"
                        class="-mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  px-3 py-[0.25rem] outline-none "
                        placeholder="Search "
                        aria-label="Search"
                        aria-describedby="button-addon1"
                        value={search}
                        onChange={handleSearch}
                      />

                      <button
                        class="rounded-r  px-6 py-2.5 text-xs text-white "
                        style={{ backgroundColor: "#0D2644" }}
                        type="button"
                      >
                        {searchIcon}
                      </button>
                    </div>
                  </div>
                  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table class="min-w-full leading-normal">
                        <thead>
                          <tr>
                            {keys.map((key) => (
                              <th class="px-3 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-sm font-semibold text-gray-950 capitalize tracking-wider">
                                {key.split("_").length > 1
                                  ? key.split("_").join(" ")
                                  : key}
                              </th>
                            ))}
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-950 uppercase tracking-wider">
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
