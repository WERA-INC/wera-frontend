import React, { useState, useEffect } from "react";
import axios from "axios";

const Experience = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const [isAddingExpereince, setIsAddingExperience] = useState(false);

  const toggleAddExperience = () => {
    setIsAddingExperience(!isAddingExpereince);
  };

  const [experienceData, setExperienceData] = useState([]);
  const [formData, setFormData] = useState({
    year: "",
    company: "",
    job_description: "",
  });

  useEffect(() => {
    async function fetchExperienceData(id) {
      const response = await axios.get(
        `http://localhost:3000/profiles/2/experiences/`
      );
      setExperienceData(response.data);
    }

    fetchExperienceData();
  }, []);

  async function handleAddExperience(event, id) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/profiles/2/experiences/`,
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
      await axios.delete(
        `http://localhost:3000/profiles/${id}/experiences/${id}`
      );
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
        `http://localhost:3000/profiles/${id}/experiences/`,
        updatedData
      );
      setExperienceData(
        experienceData.length > 0
          ? experienceData.map((experience) =>
              experience.id === id ? response.data : experience
            )
          : []
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
      {isAddingExpereince ? (
        <section class="max-w-4xl p-6 mx-auto  rounded-md  dark:bg-gray-800 mt-20">
           <form
              onSubmit={handleAddExperience}
              className="bg-dark text-white  rounded  mt-2"
              style={{
                background:
                  "linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.9), #0D2644)",
                  padding: "70px",
              }}
           
            >
                 <h3 className="top-1 ">New Experience</h3>
            <div className="mb-4">
              <label className="block font-bold">Year:</label>
              <input
                className="border bg-black rounded px-2 py-1 w-full"
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold">Company:</label>
              <input
                className="border bg-black rounded px-2 py-1 w-full"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold">Job Description:</label>
              <input
                className="border bg-black rounded px-2 py-1 w-full"
                type="text"
                name="job_description"
                value={formData.job_description}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"

              type="submit"
            >
              Add
            </button>
            <button
              type="button"
              className=" bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={toggleAddExperience}
            >
              Cancel
            </button>
          </form>
        </section>
      ) : (
        <div>
          <h1 className="font-bold  mb-4">Experience</h1>
          <button
            className=" text-white px-4 py-2 rounded"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,1), #0D2644)",
            }}
            onClick={toggleAddExperience}
          >
            Add
          </button>
          <div className="space-y-4">
            {/* Render experience data */}
            {experienceData.map((experience) => (
              <div key={experience.id} className="border p-4">
                <p className="font-bold">Company: {experience.company}</p>
                <p className="text-gray-600">Year:{experience.year}</p>
                <p className="mt-2">
                  Job Description:{experience.job_description}
                </p>
                <div className="flex justify-center p-2 mt-4">
                <button
                        class="inline-flex items-center px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                        onClick={() => handleDeleteExperience(experience.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={toggleEdit}
                  >
                    Edit
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
