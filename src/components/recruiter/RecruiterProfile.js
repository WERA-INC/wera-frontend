import React from "react";
import RecruiterImg from "./recruiter.png"


const RecruiterProfile = () => {
  return (
   <div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={RecruiterImg} class="img-fluid rounded-start" alt="" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">SLEEK SOLUTIONS LTD.</h5>
        <p class="card-text">Sleek Solutions Ltd is a cutting-edge software company specializing in web and software development, as well as graphics design.</p>
        <p class="card-text"><small class="text-body-secondary">Adams Arcade, Kilimani</small></p>
      </div>
    </div>
  </div>
</div>
    
   
  );
};

export default RecruiterProfile;
