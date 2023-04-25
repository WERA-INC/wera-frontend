import React, { useState, useEffect } from "react";
import axios from "axios";

const Education = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const [educationData, setEducationData] = useState([]);
  const [formData, setFormData] = useState({
    year_of_admission: "",
    year_of_completion: "",
    institution: "",
    qualification: "",
  });

  useEffect(() => {
    async function fetchEducationData(id) {
      const response = await axios.get(
        `http://localhost:3000/profiles/1/educations`
      );
      setEducationData(response.data);
      // console.log(response.data);
    }

    fetchEducationData();
  }, []);

  async function handleAddEducation(event, id) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3000/profiles/${id}/educations`,
        formData
      );
      setEducationData([...educationData, response.data]);
      setFormData({
        year_of_admission: "",
        year_of_completion: "",
        institution: "",
        qualification: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteEducation(id) {
    try {
      await axios.delete(
        `http://localhost:3000/profiles/${id}/educations/${id}`
      );
      setEducationData(
        educationData.filter((education) => education.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateEducation(id, updatedData) {
    try {
      const response = await axios.patch(
        `http://localhost:3000/profiles/${id}/educations/${id}`,
        updatedData
      );
      setEducationData(
        educationData.map((education) =>
          education.id === id ? response.data : education
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
      <div className="bg-gray-100 p-4">
        <h1>Education</h1>
        {/* Render education data */}
        {educationData.map((education) => (
          <div key={education.id} className="bg-white rounded p-4 mb-4">
            <p className="font-bold">
              Year of admission: {education.year_of_admission}
            </p>
            <p>Year of completion: {education.year_of_completion}</p>
            <p>Institution: {education.institution}</p>
            <p>Qualification: {education.qualification}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 mt-4"
              onClick={() => handleDeleteEducation(education.id)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() =>
                handleUpdateEducation(education.id, { ...education })
              }
            >
              Edit
            </button>
          </div>
        ))}

        {/* Render form to add education */}
        <form
          onSubmit={handleAddEducation}
          className="bg-white rounded p-4 mt-4"
        >
          <label className="block mb-2">
            Year of admission:
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              name="year_of_admission"
              value={formData.year_of_admission}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Year of completion:
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              name="year_of_completion"
              value={formData.year_of_completion}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Institution:
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-2">
            Qualification:
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            />
          </label>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Education;
