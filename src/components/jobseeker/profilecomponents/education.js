import React, { useState, useEffect } from "react";
import axios from "axios";

const Education = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const [isAddingEducation, setIsAddingEducation] = useState(false);

  const toggleAddEducation = () => {
    setIsAddingEducation(!isAddingEducation);
  };

  const [educationData, setEducationData] = useState([]);
  const [formData, setFormData] = useState({
    year_of_admission: "",
    year_of_completion: "",
    institution: "",
    qualification: "",
  });

  useEffect(() => {
    async function fetchEducationData() {
      const response = await axios.get(
        `http://localhost:3000/profiles/2/educations/`
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
        `http://localhost:3000/profiles/2/educations/`,
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
      const formDataToUpdate = new FormData();
      formDataToUpdate.append("institution", updatedData.institution);
      formDataToUpdate.append("qualification", updatedData.qualification);
      formDataToUpdate.append(
        "year_of_admission",
        updatedData.year_of_admission
      );
      formDataToUpdate.append(
        "year_of_completion",
        updatedData.year_of_completion
      );

      const response = await axios.patch(
        `http://localhost:3000/profiles/${educationData.id}/educations/${id}`,
        formDataToUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setEducationData(
        educationData.map((education) =>
          education.id === id ? response.data : education
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <>
      {isAddingEducation ? (
        <div className="flex">
          {/* Render form to add education */}

          <section className="max-w-4xl p-6 mx-auto  rounded-md  dark:bg-gray-800 mt-20">
            <form
              onSubmit={handleAddEducation}
              className="bg-dark text-white  rounded  mt-2"
              style={{
                background:
                  "linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.9), #0D2644)",
                padding: "70px",
              }}
            >
              <h3 className="top-1 ">New Education</h3>
              <label className="block mb-2">
                Year of admission:
                <input
                  className="border  rounded bg-black py-2 px-3"
                  type="text"
                  name="year_of_admission"
                  value={formData.year_of_admission}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-2">
                Year of completion:
                <input
                  className="border rounded bg-black bg-dark py-2 px-3"
                  type="text"
                  name="year_of_completion"
                  value={formData.year_of_completion}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-2">
                Institution:
                <input
                  className="border rounded bg-black py-2 px-3"
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                />
              </label>
              <label className="block mb-2">
                Qualification:
                <input
                  className="border  rounded bg-black  py-2 px-3"
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
              <button
                type="button"
                className=" bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={toggleAddEducation}
              >
                Cancel
              </button>
            </form>
          </section>
        </div>
      ) : (
        <div>
          <h1>Education</h1>
          <button
            type="button"
            className=" text-white font-bold py-2 px-4 rounded"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,1), #0D2644)",
            }}
            onClick={toggleAddEducation}
          >
            Add
          </button>
          {/* Render education data */}
          <div className="grid grid-cols-4 gap-3">
            {educationData.map((education) => (
              <div key={education.id} className="bg-white rounded p-4 mb-4">
                <div className="text-white">
                  <section
                    className="w-64 mx-auto bg-dark rounded-2xl px-8 py-6 shadow-lg h-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.9), #0D2644)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-8 ">
                      <p>Start Year: {education.year_of_admission}</p>
                      <p>Year of completion: {education.year_of_completion}</p>
                      <p>Institution: {education.institution}</p>
                      <p>Qualification: {education.qualification}</p>
                    </div>
                    <button
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={toggleEdit}
                    >
                      Edit
                    </button>

                    <div className="mt-3 text-white text-sm">
                      <button
                        className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                        onClick={() => handleDeleteEducation(education.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            srokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </section>
                </div>
                {isEditing && (
                  <section className="max-w-4xl p-6 mx-auto  rounded-md  dark:bg-gray-800 mt-20">
                    <form className="bg-black justify-center items-center rounded p-4 mt-4">
                      <input
                        type="text"
                        name="year_of_admission"
                        placeholder="Year of Admission"
                        value={formData.year_of_admission}
                        onChange={handleChange}
                        className="bg-white rounded p-2 mb-2"
                      />
                      <input
                        type="text"
                        name="year_of_completion"
                        placeholder="Year of Completion"
                        value={formData.year_of_completion}
                        onChange={handleChange}
                        className="bg-white rounded p-2 mb-2"
                      />
                      <input
                        type="text"
                        name="institution"
                        placeholder="Institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className="bg-white rounded p-2 mb-2"
                      />
                      <input
                        type="text"
                        name="qualification"
                        placeholder="Qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="bg-white rounded p-2 mb-2"
                      />
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() =>
                          handleUpdateEducation(educationData.id, educationData)
                        }
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2"
                        onClick={toggleEdit}
                      >
                        Cancel
                      </button>
                    </form>
                  </section>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Education;

{
  /* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() =>
                  handleUpdateEducation(education.id, { ...education })
                }
              >
                Edit
              </button> */
}
{
  /* <div>
          {educationData.map((education) => (
            <div key={education.id} className="bg-white rounded p-4 mb-4">
              <div className="bg-dark">
              <p>Year of admission: {education.year_of_admission}</p>
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
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleEdit}
              >
                Edit
              </button>
              </div>
              {isEditing && (
                 <section className="max-w-4xl p-6 mx-auto  rounded-md  dark:bg-gray-800 mt-20">
                  <form className="bg-black justify-center items-center rounded p-4 mt-4">
                  <input
                    type="text"
                    name="year_of_admission"
                    placeholder="Year of Admission"
                    value={formData.year_of_admission}
                    onChange={handleChange}
                    className="bg-white rounded p-2 mb-2"
                  />
                  <input
                    type="text"
                    name="year_of_completion"
                    placeholder="Year of Completion"
                    value={formData.year_of_completion}
                    onChange={handleChange}
                    className="bg-white rounded p-2 mb-2"
                  />
                  <input
                    type="text"
                    name="institution"
                    placeholder="Institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="bg-white rounded p-2 mb-2"
                  />
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="bg-white rounded p-2 mb-2"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleUpdateEducation(educationData.id, educationData)}
                  >
                    Update
                  </button>
                  <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={toggleEdit}
              >
                Cancel
              </button>
                </form>
                </section>
              )}
            </div>
          ))}
          </div> */
}
