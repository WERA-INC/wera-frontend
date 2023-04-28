import "./App.css";
import { useState, useEffect } from "react";

// guest views
import Guest from "../components/guest";
import GuestLanding from "./guest/pages";
import GuestSignIn from "./guest/pages/sign-in";
import GuestSignUp from "./guest/pages/sign-up";

// jobseeker
import JobSeeker from "../components/jobseeker";
import JobSeekerLanding from "./jobseeker/pages";
// import JobsApplied from "./jobseeker/JobsApplied";
// import JobCard from "./jobseeker/JobCard";
// import JobseekerNavbar from "./jobseeker/JobseekerNavbar";
// import JobseekerProfile from "./jobseeker/JobseekerProfile";
// Admin
// import Dashboard from "./admin/Dashboard";
// import DashboardSelection from "./admin/DashboardSelection";
// employer
// import RecruiterProfile from "./recruiter/RecruiterProfile";
// import AddJob from "./recruiter/AddJob";
// import JobListing from "./recruiter/JobListing";
// import CompanyDashboard from "./company/CompanyDashboard.js";
// import CompanyNav from "./company/navs/CompanyNav.js";
// import JobsNav from "./company/navs/JobsNav.js";
// import AddJobListing from "./company/forms/AddJobListing.js";
// import RecruiterJobsTable from "./company/tables/RecruiterJobsTable.js";
// import JobDetails from "./company/views/JobDetails.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: <GuestLanding />,
      },
      {
        path: "/sign-in",
        element: <GuestSignIn />,
      },
      {
        path: "/sign-up",
        element: <GuestSignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <JobSeeker/>,
    children: [
      {
        path: "/jobseeker",
        element: <JobSeekerLanding />,
      },
      {
        path: "/sign-in",
        element: <GuestSignIn />,
      },
      {
        path: "/sign-up",
        element: <GuestSignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  //   return (
  // <div className="App">
  //   <Routes>
  //     {/* general paths*/}
  //     <Route path="/" element={<LandingPage />} />
  //     <Route
  //       path="/login"
  //       element={<Login setUser={() => {}} setCompany={() => {}} />}
  //     />
  //     <Route path="/register" element={<Register />} />
  //     <Route path="/footer" element={<Footer />} />

  //     {/* Admin paths */}
  //     <Route path="/admin-dashboard" element={<Dashboard />} />
  //     <Route path="/admin-dashboard/:slug" element={<DashboardSelection />} />

  //     {/* Recruiter paths */}
  //     <Route path="/company" element={<CompanyNav />}>
  //       <Route index element={<CompanyDashboard />} />
  //       <Route path="dashboard" element={<CompanyDashboard />} />
  //       <Route path="jobs" element={<JobsNav employer={employer} />}>
  //         <Route index element={<RecruiterJobsTable employer={employer} />} />
  //         <Route path="view" element={<JobDetails />} />
  //         <Route path="new-job" element={<AddJob />} />
  //         {/* <Route path="new-job" element={<AddJobListing />} /> */}
  //       </Route>
  //     </Route>
  //     <Route path="/recruiterprofile" element={<RecruiterProfile />} />
  //     <Route path="/joblisting" element={<JobListing />} />

  //     {/* Jobseeker paths */}
  //     <Route
  //       path="/jobseeker"
  //       element={<JobseekerLandingPage jobseeker={jobseeker} />}
  //     />
  //     <Route
  //       path="/jobsapplied"
  //       element={<JobsApplied jobseeker={jobseeker} />}
  //     />
  //     <Route path="/jobs/:id" element={<JobCard />} />
  //     <Route path="/jobseekerprofile" element={<JobseekerProfile />} />
  //     <Route path="/jobseekernavbar" element={<JobseekerNavbar />} />
  //   </Routes>
  // </div>
  //   );
}

export default App;
