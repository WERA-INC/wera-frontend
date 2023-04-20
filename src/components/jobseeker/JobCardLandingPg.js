import React from 'react'
import { useNavigate } from "react-router-dom";




const JobCardLandingPg = () => {
    const navigator = useNavigate();
  return (
    <div
      class="card js-card mb-4"
      style={{ width: 800 }}
      onClick={() => {
        navigator("/jobcard");
      }}
    >
      <div className="d-flex align-items-center justify-content-start">
        <img
          src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="profile-picture m-4"
        />
        <div>
          <h6 className="text-left">Product Designer</h6>
          <span className="me-4">Safaricom</span>
          <span className="me-4">Part-time</span>
          <span className="me-4">On-site</span>
        </div>
      </div>
      <p className="text-left ps-4">
        We are looking for an analytical, results-driven back-end developer who
        will work with team members to troubleshoot and improve current back-end
        applications and processes. The Back-end Developer will...
      </p>
    </div>
  );
}

export default JobCardLandingPg