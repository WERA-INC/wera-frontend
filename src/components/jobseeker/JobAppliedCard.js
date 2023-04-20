import React from 'react'

const JobAppliedCard = () => {
  return (
    <div className="col-4">
      <div class="card js-card mb-4" style={{ width: 300 }}>
        <div className="d-flex align-items-center justify-content-start my-3">
          <img
            src="https://images.pexels.com/photos/15857207/pexels-photo-15857207.png?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="profile-picture mx-4"
          />
          <div className="text-left">
            <p>Date of application:</p>
            <p>12/10/2022</p>
          </div>
        </div>
        <div className="text-left ps-4 mb-4">
          <h4 className="fw-bold">Product Designer</h4>
          <span className="me-4">Safaricom</span>
          <span className="me-4">Part-time</span>
          <span className="me-4">On-site</span>
        </div>
      </div>
    </div>
  );
}

export default JobAppliedCard