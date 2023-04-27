import React, { useState, useEffect } from 'react';
import './JobListing.css';

const JobListing = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch('/api/applicants')
      .then(response => response.json())
      .then(data => setApplicants(data))
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="applicants-section-container">
        <h3>Applicants For this Job</h3>
        <div className="applicants-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Applicant</th>
                <th>View More</th>                
              </tr>
            </thead>
            <tbody>
              {applicants.map(applicant => (
                <tr key={applicant.id}>
                  <td>{applicant.date}</td>
                  <td>{applicant.name}</td>
                  <td><a href="#">View</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default JobListing;
