import { useState } from 'react';
import './AddJob.css';

const [formData, setFormData] = useState({
  employer_id: sessionStorage.getItem('employer_id'),
  title: "",
  description: "",
  qualification: "",
  responsibilities: "",
  skills: "",
  job_type: "",
  location: "",
  estimated_salary: "",
  application_deadline: "",
  cut_off: "",
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // add your code here to submit the form data to your server or store

    fetch("/opportunities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // handle the response from the server or store
      })
      .catch((error) => {
        console.error(error);
        // handle the error
      });
  };
  
  return (
    <div>

<div className="add-job">
        <h1>Add a Job</h1>
        <div className="container">
          <form className="form-addjob" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="qualification">Qualification</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />

            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />

            <label htmlFor="job_type">Job Type</label>
            <select
              id="job_type"
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Freelance">Freelance</option>
            </select>

            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />

            <label htmlFor="estimated_salary">Estimated Salary</label>
            <input
              type="text"
              id="estimated_salary"
              name="estimated_salary"
              value={formData.estimated_salary}
              onChange={handleChange}
              required
            />

            <label htmlFor="application_deadline">Application Deadline</label>
            <input
              type="datetime-local"
              id="application_deadline"
              name="application_deadline"
              value={formData.application_deadline}
              onChange={handleChange}
              required
            />

          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>

    </div>
    
  )
}

export default AddJob;
