import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello, Wera Team</h1>
      <p>Click on the component name to view the component you're working on</p>

      <p>The structure is organized per the user story we designed</p>

      <h3>GENERAL</h3>
      <ul>
        <li>
          <Link to="landingpage">LandingPage</Link>
        </li>
        <li>
          <Link to="footer">Footer</Link>
        </li>
      </ul>
      <h3>RECRUITER</h3>
      <ul>
        <li>
          <Link to="recruiter">RecruiterLandingPage</Link>
        </li>
        <li>
          <Link to="addjob">AddJob</Link>
        </li>
        <li>
          <Link to="joblisting">JobListing</Link>
        </li>
        <li>
          <Link to="recruiternavbar">RecruiterNavbar</Link>
        </li>
        <li>
          <Link to="recruitersignup">RecruiterSignup</Link>
        </li>
        <li>
          <Link to="recruiterlogin">RecruiterLogin</Link>
        </li>
      </ul>
      <h3>JOB SEEKER</h3>
      <ul>
        <li>
          <Link to="jobseeker">JobSeekerLandingPage</Link>
        </li>
        <li>
          <Link to="jobseekersignup">JobseekerSignup</Link>
        </li>
        <li>
          <Link to="jobseekerlogin">JobseekerLogin</Link>
        </li>
        <li>
          <Link to="jobsapplied">JobsApplied</Link>
        </li>
        <li>
          <Link to="jobcard">JobCard</Link>
        </li>
        <li>
          <Link to="jobseekerprofile">JobseekerProfile</Link>
        </li>
        <li>
          <Link to="jobseekernavbar">JobseekerNavbar</Link>
        </li>
      </ul>
      <h3>ADMIN</h3>
      <ul>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="adminlogin">AdminLogin</Link>
        </li>
        <li>
          <Link to="dashboardselect">DashboardSelection</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home