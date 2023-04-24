import React, { useState, useEffect } from "react";
import axios from "axios";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [formData, setFormData] = useState({
    year: "",
    company: "",
    job_description: "",
  });

  useEffect(() => {
    async function fetchExperienceData(id) {
      const response = await axios.get(`https://rails-qmlh.onrender.com/profiles/${id}/experiences`);
      setExperienceData(response.data);
    }

    fetchExperienceData();
  }, []);

  async function handleAddExperience(event, id) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://rails-qmlh.onrender.com/profiles/${id}/experiences`,
        formData
      );
      setExperienceData([...experienceData, response.data]);
      setFormData({
        year: "",
        company: "",
        job_description: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteExperience(id) {
    try {
      await axios.delete(`https://rails-qmlh.onrender.com/profiles/${id}/experiences/${id}`);
      setExperienceData(
        experienceData.filter((experience) => experience.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateExperience(id, updatedData) {
    try {
      const response = await axios.patch(
        `https://rails-qmlh.onrender.com/profiles/${id}/experiences/${id}`,
        updatedData
      );
      setExperienceData(
        experienceData.map((experience) =>
          experience.id === id ? response.data : experience
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <>
      <div className="font-bold text-xl mb-4">Experience</div>
      <div className="space-y-4">
        {/* Render experience data */}
        {experienceData.map((experience) => (
          <div key={experience.id} className="border p-4">
            <p className="font-bold">{experience.company}</p>
            <p className="text-gray-600">{experience.year}</p>
            <p className="mt-2">{experience.job_description}</p>
            <div className="flex mt-4">
              <button
                className="mr-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteExperience(experience.id)}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() =>
                  handleUpdateExperience(experience.id, { ...experience })
                }
              >
                Edit
              </button>
            </div>
          </div>
        ))}

        {/* Render form to add experience */}
        <form onSubmit={handleAddExperience} className="border p-4">
          <div className="mb-4">
            <label className="block font-bold">Year:</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Company:</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Job Description:</label>
            <input
              className="border rounded px-2 py-1 w-full"
              type="text"
              name="job_description"
              value={formData.job_description}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Experience;
