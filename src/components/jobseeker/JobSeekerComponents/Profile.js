import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function range(start, end, step = 1) {
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill()
    .map((_, i) => start + i * step);
}

const Profile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const [profileData, setProfileData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    date_of_birth: "",
    biography: "",
    tags: "",
    profile_pic: "",
    resume: null,
  });

  useEffect(() => {
    async function fetchProfileData() {
      const response = await axios.get(`http://localhost:3000/profiles/36`);
      setProfileData(response.data);
      setFormData(response.data);
      console.log(response.data);
    }

    fetchProfileData();
  }, []);

  async function handleUpdateProfile(event) {
    event.preventDefault();

    try {
      const formDataToUpdate = new FormData();
      formDataToUpdate.append("phone_number", formData.phone_number);
      formDataToUpdate.append("date_of_birth", formData.date_of_birth);
      formDataToUpdate.append("biography", formData.biography);
      formDataToUpdate.append("tags", formData.tags);
      if (formData.profile_pic) {
        formDataToUpdate.append("profile_pic", formData.profile_pic);
      }
      if (formData.resume) {
        formDataToUpdate.append("resume", formData.resume);
      }

      const response = await axios.patch(
        `http://localhost:3000/profiles/${profileData.id}`,
        formDataToUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    const { name, value, type } = event.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }
  return (
    <>
      {isEditing ? (
        <form
          onSubmit={handleUpdateProfile}
          encType="multipart/form-data"
          className="bg-white rounded p-4 mt-4"
        >
          <h3>Edit Profile</h3>
          <form
            onSubmit={handleUpdateProfile}
            encType="multipart/form-data"
            className="bg-white rounded p-4 mt-4"
          >
            <label className="block mb-2">
              Phone number:
              <input
                className="border rounded w-full py-2 px-3"
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </label>
            <label className="block mb-2">
              Date of birth:
              <DatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
              
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                   
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                   
                  </div>
                )}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
            <label className="block mb-2">
              Biography:
              <textarea
                className="border rounded w-full py-2 px-3"
                name="biography"
                value={formData.biography}
                onChange={handleChange}
              />
            </label>
            <label className="block mb-2">
              tags:
              <input
                className="border rounded w-full py-2 px-3"
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </label>
            <label className="block mb-2">
              Profile pic:
              <input
                className="border rounded w-full py-2 px-3"
                type="file"
                name="profile_pic"
                onChange={handleChange}
              />
            </label>
            <label className="block mb-2">
              Resume:
              <input
                className="border rounded w-full py-2 px-3"
                type="file"
                name="resume"
                onChange={handleChange}
              />
            </label>
          </form>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Profile
          </button>
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={toggleEdit}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <div>Profile</div>
          <div className="bg-gray-100 p-4">
            {/* Render profile data */}
            <div className="bg-white rounded p-4 mb-4">
              <p className="font-bold">Name: {profileData.full_name}</p>
              <p>Phone number: {profileData.phone_number}</p>
              <p>Date of birth: {profileData.date_of_birth}</p>
              <p>Biography: {profileData.biography}</p>
              <p>tags: {profileData.tags}</p>
              {profileData.profile_pic && (
                <img
                  src={profileData.profile_pic}
                  alt="Profile pic"
                  className="h-32 w-32 object-cover rounded-full"
                />
              )}
              <p>Resume: {profileData.resume}</p>
            </div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleEdit}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

// <>
// <div>Profile</div>
// <div className="bg-gray-100 p-4">
//   {/* Render profile data */}
//   <div className="bg-white rounded p-4 mb-4">
//     <p className="font-bold">Name: {profileData.full_name}</p>
//     <p>Phone number: {profileData.phone_number}</p>
//     <p>Date of birth: {profileData.date_of_birth}</p>
//     <p>Biography: {profileData.biography}</p>
//     <p>tags: {profileData.tags}</p>
//     {profileData.profile_pic && (
//       <img
//         src={profileData.profile_pic}
//         alt="Profile pic"
//         className="h-32 w-32 object-cover rounded-full"
//       />
//     )}
//     <p>Resume: {profileData.resume}</p>
//   </div>
// </div>
// {/* Render Form for update profile */}

// </>
