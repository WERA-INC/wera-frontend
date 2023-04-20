import { useState} from 'react';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    qualification: "",
    responsibilities: "",
    skills: "",
    job_type: "",
    location: "",
    estimated_salary: "",
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
    <form onSubmit={handleSubmit}>
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

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor="estimatedSalary">Estimated Salary</label>
      <input
        type="text"
        id="estimatedSalary"
        name="estimatedSalary"
        value={formData.estimatedSalary}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default AddJob