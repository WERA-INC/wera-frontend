import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
// general

import LandingPage from "./LandingPage";
import Footer from "./LandingHomePage/Footer";
import Register from "./Register";
import Login from "./Login";
// jobseeker
import JobseekerLandingPage from "./jobseeker/JobseekerLandingPage";
import JobsApplied from "./jobseeker/JobsApplied";
import JobCard from "./jobseeker/JobCard";
import JobseekerNavbar from "./jobseeker/JobseekerNavbar";
import JobseekerProfile from "./jobseeker/JobseekerProfile";
// Admin
import Dashboard from "./admin/Dashboard";
import DashboardSelection from "./admin/DashboardSelection";
// employer
import RecruiterProfile from "./recruiter/RecruiterProfile";
import AddJob from "./recruiter/AddJob";
import JobListing from "./recruiter/JobListing";
import CompanyDashboard from "./company/CompanyDashboard.js";
import CompanyNav from "./company/navs/CompanyNav.js";
import JobsNav from "./company/navs/JobsNav.js";
// import AddJobListing from "./company/forms/AddJobListing.js";
import RecruiterJobsTable from "./company/tables/RecruiterJobsTable.js";
import JobDetails from "./company/views/JobDetails.js";

function App() {
  const [jobseeker, setJobseeker]=useState(null)
  // useEffect(() => {
  //   const jsId = localStorage.getItem("jobseekerId");
  //   console.log(jsId);
  //   if (jsId) {
  //     const id = JSON.parse(jsId);
  //     fetch(`http://localhost:3000/profiles/${id}`).then((res) => {
  //       if (res.ok) {
  //         res.json().then((user) => console.log(user));
  //       }
  //     });
  //   }
  // }, []);
  // console.log(jobseeker)
  return (
    <div className="App">
      <Routes>
        {/* general paths*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setUser={setJobseeker} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/footer" element={<Footer />} />

        {/* Admin paths */}
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard/:slug" element={<DashboardSelection />} />

        {/* Recruiter paths */}
        <Route path="/company" element={<CompanyNav />}>
          <Route index element={<CompanyDashboard />} />
          <Route path="dashboard" element={<CompanyDashboard />} />
          <Route path="jobs" element={<JobsNav />}>
            <Route index element={<RecruiterJobsTable />} />
            <Route path="view" element={<JobDetails />} />
            <Route path="new-job" element={<AddJob />} />
            {/* <Route path="new-job" element={<AddJobListing />} /> */}
          </Route>
        </Route>
        <Route path="/recruiterprofile" element={<RecruiterProfile />} />
        <Route path="/joblisting" element={<JobListing />} />

        {/* Jobseeker paths */}
        <Route
          path="/jobseeker"
          element={<JobseekerLandingPage jobseeker={jobseeker} />}
        />
        <Route
          path="/jobsapplied"
          element={<JobsApplied jobseeker={jobseeker} />}
        />
        <Route path="/jobs/:id" element={<JobCard />} />
        <Route path="/jobseekerprofile" element={<JobseekerProfile />} />
        <Route path="/jobseekernavbar" element={<JobseekerNavbar />} />
      </Routes>
    </div>
  );
}

export default App;