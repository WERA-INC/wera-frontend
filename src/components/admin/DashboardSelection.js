import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useParams } from "react-router";

import Tabledata from "./Tabledata";

const DashboardSelection = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [keys, setKeys] = useState([]);
  let { slug } = useParams();
  //  console.log(slug)
  useEffect(() => {
    fetch(`http://localhost:3000/${slug}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => setData(data));
      }
    });
     
  }, []);

  
  //  let keys = data.map((obj)=>{console.log(Object.keys(obj));})
  //  console.log(keys[0])
  useEffect(() => {
    if (data.length > 0) {
      //  console.log(Object.keys(data[0]));
      if (slug === "profiles") {
        let selected = data.map((object) => {
          return (({created_at, full_name,phone_number, email_address }) => ({created_at, full_name,phone_number, email_address }))(object);
        });
        setFiltered(selected);
      } else if (slug === "opportunities") {
        let selected = data.map((object) => {
          return (({created_at, title, job_type, cut_off, estimated_salary }) => ({created_at,
            title,
            job_type,
            cut_off,
            estimated_salary
          }))(object);
        });
        setFiltered(selected);
      } else if (slug === "employers") {
        let selected = data.map((object) => {
          return (({created_at, company_name, company_location, email_address }) => ({created_at,
            company_name,
            company_location,
            email_address,
          }))(object);
        });
        setFiltered(selected);
      } else {
        let selected = data.map((object) => {
          return (({created_at, applicant, title, company_name }) => ({created_at, applicant, title, company_name
            
          }))(object);
        });
        setFiltered(selected);
      }
    }
  }, [data]);
  console.log(filtered[0]);
  console.log(slug);
  // let keys= Object.keys(filtered[0])
  useEffect(()=>{
    if(filtered[0]!==undefined){
      setKeys(Object.keys(filtered[0]))
    }
  },[filtered])
 console.log("full_name".split("_").length)
  return (
    <div>
      <div className="blue">
        <nav
          className="navbar container d-flex align-items-center justify-content-between"
          id="navtitle"
        >
          <h4 href="#" className="me-3">
            WERA
          </h4>
          <div className="right-nav">
            <button className="px-3 py-2 bg-light text-dark">Logout</button>
          </div>
        </nav>
      </div>

      <div class="row">
        <div class="col-md-4 col-sm-6 offset-md-8 ">
          <div class="card">
            <div className="d-flex align-items-center justify-content-between brown px-3">
              <div className="text-light">
                <h1 className="display-1">{data.length}</h1>
                <h3 className="text-capitalize">
                  {slug === "profiles"
                    ? "Job Seekers"
                    : slug === "opportunities"
                    ? "Jobs"
                    : slug}
                </h3>
              </div>
              <i class="bi bi-people-fill dashboard_icons text-light"></i>
            </div>
          </div>
        </div>
      </div>

      {/* table section */}
      <div className="d-flex align-items-center justify-content-between py-2 px-5 select-title">
        <div>
          <span className="me-5 h3 text-capitalize">
            {slug === "profiles"
              ? "Job Seekers"
              : slug === "opportunities"
              ? "Jobs"
              : slug}
          </span>

          <i class="bi bi-people-fill h3"></i>
        </div>
        <div>
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class=" border-0" id="search-addon">
              <i class="fas fa-search p-2"></i>
            </span>
          </div>
        </div>
      </div>
      <table class="table">
        <thead className="blue">
          <tr className="text-light text-left">
            {/* <th scope="col">Date</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Industry</th>
            <th scope="col">Mark</th> */}
            {keys.map((key) => (
              <th scope="col" className="text-capitalize">
                {key.split("_").length > 1 ? key.split("_").join(" ") : key}
              </th>
            ))}
            <th scope="col">Mark</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((val) => {
            return <Tabledata val={val} />;
          })}

          {/* <Tabledata />
          <Tabledata />
          <Tabledata />
          <Tabledata /> */}
        </tbody>

        {/* <button className="btn blue text-light my-2 ">Delete</button> */}
      </table>
    </div>
  );
};

export default DashboardSelection;
