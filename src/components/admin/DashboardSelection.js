import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useParams } from "react-router";

import Tabledata from "./Tabledata";

const DashboardSelection = ({ data }) => {
  console.log(data);
  // const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [keys, setKeys] = useState([]);
  let { slug } = useParams();
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
    <div className="antialiased font-sans bg-gray-200 px-5 m-2">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Summary</h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="block relative">
              <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <input
                placeholder="Search"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {keys.map((key) => (
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        {key.split("_").length > 1
                          ? key.split("_").join(" ")
                          : key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSelection;
//  <div>
//    <div className="blue">
//      <nav
//        className="navbar container d-flex align-items-center justify-content-between"
//        id="navtitle"
//      >
//        <h4 href="#" className="me-3">
//          WERA
//        </h4>
//        <div className="right-nav">
//          <button className="px-3 py-2 bg-light text-dark">Logout</button>
//        </div>
//      </nav>
//    </div>

//    <div className="row">
//      <div className="col-md-4 col-sm-6 offset-md-8 ">
//        <div className="card">
//          <div className="d-flex align-items-center justify-content-between brown px-3">
//            <div className="text-light">
//              <h1 className="display-1">{data.length}</h1>
//              <h3 className="text-capitalize">
//                {slug === "profiles"
//                  ? "Job Seekers"
//                  : slug === "opportunities"
//                  ? "Jobs"
//                  : slug}
//              </h3>
//            </div>
//            <i className="bi bi-people-fill dashboard_icons text-light"></i>
//          </div>
//        </div>
//      </div>
//    </div>

//    {/* table section */}
//    <div className="d-flex align-items-center justify-content-between py-2 px-5 select-title">
//      <div>
//        <span className="me-5 h3 text-capitalize">
//          {slug === "profiles"
//            ? "Job Seekers"
//            : slug === "opportunities"
//            ? "Jobs"
//            : slug}
//        </span>

//        <i className="bi bi-people-fill h3"></i>
//      </div>
//      <div>
//        <div className="input-group rounded">
//          <input
//            type="search"
//            className="form-control rounded"
//            placeholder="Search"
//            aria-label="Search"
//            aria-describedby="search-addon"
//          />
//          <span className=" border-0" id="search-addon">
//            <i className="fas fa-search p-2"></i>
//          </span>
//        </div>
//      </div>
//    </div>
//    <table className="table">
//      <thead className="blue">
//        <tr className="text-light text-left">

//          {keys.map((key) => (
//            <th scope="col" className="text-capitalize">
//              {key.split("_").length > 1 ? key.split("_").join(" ") : key}
//            </th>
//          ))}
//          <th scope="col">Mark</th>
//        </tr>
//      </thead>
//      <tbody>
//        {filtered.map((val) => {
//          return <Tabledata val={val} />;
//        })}

//      </tbody>

//    </table>
//  </div>;
