import { useState} from 'react';
import RecruiterNavbar from "./RecruiterNavbar";
import './AddJob.css';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    qualifications: "",
    responsibilities: "",
    cut_off: "",
    job_type: "",
    application_deadline: "",
    estimated_salary: "",
    employer_id:2
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
    // console.log(formData);
    // add your code here to submit the form data to your server or store
  
    fetch("http://localhost:3000/opportunities", {
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
      <RecruiterNavbar />
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
              name="qualifications"
              value={formData.qualifications}
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

            <label htmlFor="skills">Cut Off</label>
            <input
              type="text"
              id="cut_off"
              name="cut_off"
              value={formData.cut_off}
              onChange={handleChange}
              required
            />

            <label htmlFor="type">Job Type</label>
            <input
              type="text"
              id="type"
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              required
            />

            <label htmlFor="location">Application deadline</label>
            <input
              type="date"
              id="application_deadline"
              name="application_deadline"
              value={formData.application_deadline}
              onChange={handleChange}
              required
            />

            <label htmlFor="estimatedSalary">Estimated Salary</label>
            <input
              type="text"
              id="estimated_salary"
              name="estimated_salary"
              value={formData.estimated_salary}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
