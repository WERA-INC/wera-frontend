import React from 'react'

const DashboardSelection = () => {
  return (
    <div>DashboardSelection</div>
  )
}

export default DashboardSelection
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
