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
import JobsApplied from "./jobseeker/pages/jobsapplied";
import JobsCard from "./jobseeker/pages/jobscard";
import JobseekerProfile from "./jobseeker/pages/jobseekerprofile";
// Admin
import Admin from "../components/admin";
import Dashboard from "./admin/pages";
// employer
// import RecruiterProfile from "./recruiter/RecruiterProfile";
import AddJob from "./company/pages/addjob";
import JobListing from "./company/pages/joblisting";
import JobsNav from "./company/pages";
// import AddJobListing from "./company/forms/AddJobListing.js";
// import RecruiterJobsTable from "./company/tables/RecruiterJobsTable.js";
// import JobDetails from "./company/views/JobDetails.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JobCard from "./jobseeker/pages/jobcard";
import Application from "./admin/pages/application";
import Employers from "./admin/pages/employers";
import Opprotunity from "./admin/pages/opprotunity";
import Profiles from "./admin/pages/profiles";
import CompanyNav from "../components/company";
import RecruiterJobsTable from "./company/recruitersjobtable";

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
    element: <JobSeeker />,
    children: [
      {
        path: "/jobseeker",
        element: <JobSeekerLanding />,
      },
      {
        path: "/jobseekerprofile",
        element: <JobseekerProfile />,
      },
      {
        path: "/jobsapplied",
        element: <JobsApplied />,
      },
      {
        path: "/jobscard",
        element: <JobsCard />,
      },
      {
        path: "/jobs/:id",
        element: <JobCard />,
      },
    ],
  },
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/admin-dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profiles/:id",
        element: <Profiles />,
      },
      {
        path: "/employers/:id",
        element: <Employers />,
      },
      {
        path: "/applications/:id",
        element: <Application />,
      },
      {
        path: "/opportunities/:id",
        element: <Opprotunity />,
      },
    ],
  },
  {
    path: "/",
    element: <CompanyNav />,
    children: [
      {
        path: "/company",
        element: <JobsNav />,
      },
      {
        path: "/company/add-job",
        element: <AddJob />,
      },
      {
        path: "/company/:id/jobs",
        element: <JobListing />,
      },
      {
        path: "/company/jobs",
        element: <RecruiterJobsTable />,
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
