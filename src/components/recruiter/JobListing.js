import React from 'react';
import './JobListing.css';

const JobListing = () => {
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
              <tr>
                <td>8/15/17</td>
                <td>Courtney Kimani</td>
                <td><a href="#">View</a></td>
              </tr>
              <tr>
                <td>8/15/17</td>
                <td>Billy Clinton</td>
                <td><a href="#">View</a></td>
              </tr>
              <tr>
                <td>8/15/17</td>
                <td>Risper Aluoch</td>
                <td><a href="#">View</a></td>
              </tr>
              <tr>
                <td>8/15/17</td>
                <td>Bill Simons</td>
                <td><a href="#">View</a></td>
              </tr>
              <tr>
                <td>8/15/17</td>
                <td>Edgar Obare</td>
                <td><a href="#">View</a></td>
              </tr>
              <tr>
                <td>8/15/17</td>
                <td>Reese Witherspoon</td>
                <td><a href="#">View</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default JobListing

