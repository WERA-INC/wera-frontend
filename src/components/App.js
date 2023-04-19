
import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./LandingPage";
import Home from "./Home";
import JobseekerLandingPage from "./jobseeker/JobseekerLandingPage";
import RecruiterLandingPage from "./recruiter/RecruiterLandingPage";
import Dashboard from "./admin/Dashboard";
import Footer from "./Footer";
import AdminLogin from "./admin/AdminLogin";
import DashboardSelection from "./admin/DashboardSelection";
import AddJob from "./recruiter/AddJob";
import JobListing from "./recruiter/JobListing";
import RecruiterNavbar from "./recruiter/RecruiterNavbar";
import RecruiterLogIn from "./recruiter/RecruiterLogIn";
import UserSignUp from "./UserSignUp";
import UserLogin from "./UserLogin";
import JobsApplied from "./jobseeker/JobsApplied"
import JobCard from "./jobseeker/JobCard"
import JobseekerNavbar from "./jobseeker/JobseekerNavbar"
import JobseekerProfile from "./jobseeker/JobseekerProfile"





function App() {
  return (
    <div className="App">
      <Routes>
        {/* general */}
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/userlogin" element={<UserLogin />} />
        
        {/* Admin paths */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboardselect" element={<DashboardSelection />} />

        {/* Recruiter paths */}
        <Route path="/recruiter" element={<RecruiterLandingPage />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/joblisting" element={<JobListing />} />
        <Route path="/recruiternavbar" element={<RecruiterNavbar />} />
        

        {/* Jobseeker paths */}
        <Route path="/jobseeker" element={<JobseekerLandingPage />} />
        <Route path="/jobsapplied" element={<JobsApplied />} />
        <Route path="/jobcard" element={<JobCard />} />
        <Route path="/jobseekerprofile" element={<JobseekerProfile />} />
        <Route path="/jobseekernavbar" element={<JobseekerNavbar />} />

        // others
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
