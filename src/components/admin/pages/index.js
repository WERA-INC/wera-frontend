import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Admin.css";
import { useNavigate } from "react-router-dom";
import DashboardSelection from "../dashboardSelection";
import Tabledata from "../tabledata";
import {
  PersonIcon,
  BuildingIcon,
  BriefcaseIcon,
  FilesIcon,
  SearchIcon,
} from "../../icons";

const Dashboard = () => {
  const navigator = useNavigate();
  const [summary, setSummary] = useState([]);
  const [slug, setSlug] = useState("");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [keys, setKeys] = useState([]);
  const [found, setFound] = useState([]);
  const [search, setSearch] = useState("");

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
        res.json().then((data) => {
          // console.log(data)
          setData(data);
        });
      }
    });
  }, [slug]);

  function handleSearch(event) {
    // console.log(event.target.value);
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
          return (({id,  full_name, phone_number, email_address, created_at }) => ({id,
            full_name,
            phone_number,
            email_address,
            created_at,
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "opportunities") {
        let selected = data.map((object) => {
          return (({id,  title, job_type, estimated_salary, created_at }) => ({id,
            title,
            job_type,
            estimated_salary,
            created_at,
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "employers") {
        let selected = data.map((object) => {
          return (({id,
            company_name,
            company_location,
            email_address,
            created_at,
          }) => ({id,
            company_name,
            company_location,
            email_address,
            created_at,
          }))(object);
        });
        setFiltered(selected);
      } else {
        let selected = data.map((object) => {
          return (({id,  applicant, title, company_name, created_at }) => ({id,
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
        <div className="col-start-1 col-end-2">
          <div>
            <div className="fixed top-0 bottom-0 md:w-[300px] w-[100px] dashboard-main">
              <div className="text-gray-100 text-xl">
                <div className=" py-2.5 md:p-2.5 mt-1 flex items-center">
                  <img
                    src={"/images/Logo5.png"}
                    alt="wera"
                    href="/landingpage"
                    className="md:cursor-pointer h-10 md:h-20"
                  />
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>

              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("");
                }}
              >
                <i className="hidden md:inline bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Dashboard
                </span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white">
                <i className=" hidden md:inline bi bi-bookmark-fill"></i>
                <span
                  className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold"
                  onClick={() => {
                    setSlug("profiles");
                  }}
                >
                  Jobseekers
                </span>
              </div>
              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("employers");
                }}
              >
                <i className="hidden md:inline bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Employers
                </span>
              </div>
              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("opportunities");
                }}
              >
                <i className=" hidden md:inline bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Jobs
                </span>
              </div>
              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  setSlug("applications");
                }}
              >
                <i className=" hidden md:inline bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Applications
                </span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>

              <div
                className=" py-2.5 md:p-2.5 mt-3 flex items-center rounded-md sm:px-0  md:px-4 duration-300 cursor-pointer hover:bg-blue-500 text-white"
                onClick={() => {
                  navigator("/");
                }}
              >
                <i className="hidden md:inline bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-2 md:ml-4 text-gray-200 font-bold">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-end-7 col-span-5  md:px-5 "
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
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1 md:gap-6 sm:grid-cols-2 md:p-5 ">
                  <div className="relative bg-gray-400 py-6 px-6 rounded-3xl w-32 md:w-64 my-4 shadow-xl ">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <PersonIcon />
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.profiles}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950 text-center text-center">
                        Job Seekers
                      </p>
                    </div>
                  </div>

                  <div className="relative bg-gray-400 py-6 px-6 rounded-3xl w-32 md:w-64 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <BuildingIcon />
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.employers}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950 text-center">
                        Employers
                      </p>
                    </div>
                  </div>

                  <div className="relative bg-gray-400 py-6 px-6 rounded-3xl w-32 md:w-64 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <BriefcaseIcon />
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.opportunities}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950 text-center">
                        Jobs
                      </p>
                    </div>
                  </div>

                  <div className="relative bg-gray-400 py-6 px-6 rounded-3xl w-32 md:w-64 my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                      <FilesIcon />
                    </div>
                    <div className="mt-8">
                      <div className=" ">
                        <p className="text-6xl text-center text-white-400">
                          {summary.applications}
                        </p>
                      </div>
                      <p className="text-xl font-semibold my-2 text-blue-950 text-center">
                        Applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="antialiased font-sans text-white md:px-5 md:ms-20 mt-4">
              <div className="container px-4 sm:px-8">
                <div className="py-8">
                  <div>
                    <h2 className="text-2xl text-blue-950 font-semibold leading-tight text-center uppercase">
                      {slug == "profiles"
                        ? "Job Seekers"
                        : slug == "opportunities"
                        ? "Jobs"
                        : slug}
                    </h2>
                  </div>
                  <div className="my-3 ps-2 md:ps-0 md:px-10 w-full md:w-2/3 mx-auto">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                      <input
                        type="search"
                        className="-mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300  px-3 py-[0.25rem] outline-none "
                        placeholder="Search "
                        aria-label="Search"
                        aria-describedby="button-addon1"
                        value={search}
                        onChange={handleSearch}
                      />

                      <button
                        className="rounded-r  px-6 py-2.5 text-xs text-white "
                        style={{ backgroundColor: "#0D2644" }}
                        type="button"
                      >
                        <SearchIcon />
                      </button>
                    </div>
                  </div>
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            {keys.map((key) => (
                              <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-sm font-semibold text-gray-950 capitalize tracking-wider">
                                {keys[0] == key
                                  ? null
                                  : key.split("_").length > 1
                                  ? key.split("_").join(" ")
                                  : key}
                              </th>
                            ))}
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-950 uppercase tracking-wider">
                              View
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-400 text-left text-xs font-semibold text-gray-950 uppercase tracking-wider">
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
