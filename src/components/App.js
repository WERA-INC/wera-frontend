import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import RecruiterProfile from "./recruiter/RecruiterProfile";
import LandingPage from "./LandingPage";
import Home from "./Home";
import JobseekerLandingPage from "./jobseeker/JobseekerLandingPage";
import RecruiterLandingPage from "./recruiter/RecruiterLandingPage";
import Dashboard from "./admin/Dashboard";
import Footer from "./LandingHomePage/Footer";
import UserLogin from "./Login";
import DashboardSelection from "./admin/DashboardSelection";
import AddJob from "./recruiter/AddJob";
import JobListing from "./recruiter/JobListing";
import RecruiterNavbar from "./recruiter/RecruiterNavbar";
import RecruiterLogIn from "./recruiter/RecruiterLogIn";
import RecruiterSignUp from "./recruiter/RecruiterSignUp";

import UserSignUp from "./Register";
import JobsApplied from "./jobseeker/JobsApplied";
import JobCard from "./jobseeker/JobCard";
import JobseekerNavbar from "./jobseeker/JobseekerNavbar";
import JobseekerProfile from "./jobseeker/JobseekerProfile";

// import JobseekerLogin from "./jobseeker/JobseekerLogin"

function App() {
  const [jobseeker, setJobseeker]=useState(null)
  console.log(jobseeker)
  return (
    <div className="App">
      <Routes>
        {/* general */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserLogin setUser={setJobseeker}/>} />
        <Route path="/register" element={<UserSignUp />} />

        {/* Admin paths */}
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard/:slug" element={<DashboardSelection />} />

        {/* Recruiter paths */}
        <Route path="/recruiter" element={<RecruiterLandingPage />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/joblisting" element={<JobListing />} />
        <Route path="/recruiternavbar" element={<RecruiterNavbar />} />
        <Route path="/recruitersignup" element={<RecruiterSignUp />} />
        <Route path="/recruiterlogin" element={<RecruiterLogIn />} />
        <Route path="/recruiterprofile" element={<RecruiterProfile />} />
        {/* Jobseeker paths */}
        <Route path="/jobseeker" element={<JobseekerLandingPage jobseeker={jobseeker}/>} />
        {/* <Route path="/jobseekerlogin" element={<JobseekerLogin />} /> */}
        <Route path="/jobsapplied" element={<JobsApplied />} />
        <Route path="/jobcard" element={<JobCard />} />
        <Route path="/jobseekerprofile" element={<JobseekerProfile />} />
        <Route path="/jobseekernavbar" element={<JobseekerNavbar />} />

        {/* others */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
