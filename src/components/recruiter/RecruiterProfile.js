import React, { useState } from 'react';
// import axios from 'axios';

const RecruiterProfile = () => {
  const [recruiterName, setRecruiterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [logoImage, setLogoImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create form data to send to backend
    const formData = new FormData();
    formData.append('recruiterName', recruiterName);
    formData.append('companyName', companyName);
    formData.append('email', email);
    formData.append('description', description);
    formData.append('location', location);
    formData.append('logoImage', logoImage);

    // Send form data to backend using axios
    // try {
    //   await axios.post('/api/recruiter/profile', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });

      // Reset form fields after successful submission
      setRecruiterName('');
      setCompanyName('');
      setEmail('');
      setDescription('');
      setLocation('');
      setLogoImage(null);

      // Show success message or redirect to another page
    //   alert('Recruiter profile has been successfully created!');
    // } catch (error) {
      // Show error message or handle error
      // console.error(error);
    }
  

  return (
    <div>
      <h2>Create Recruiter Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="recruiterName">Recruiter Name</label>
          <input type="text" className="form-control" id="recruiterName" value={recruiterName} onChange={(e) => setRecruiterName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" className="form-control" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="logoImage">Logo Image</label>
          <input type="file" className="form-control-file" id="logoImage" onChange={(e) => setLogoImage(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}


export default RecruiterProfile


// import React from "react";

// const RecruiterProfile = () => {
//   return (
//     <div>
//       <div class="max-w-sm mx-auto my-8 rounded overflow-hidden shadow-lg bg-gray-100">
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2">Moringa Tech Camp</div>
//         </div>
//         <div class="px-6 pt-4 pb-2">
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             moringa@tech.com
//           </span>
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya
//           </span>
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             Type;full time, part time
//           </span>
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             https://moringaschool.com/
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecruiterProfile;
