import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Application = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/applications/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data)
          setData(data);
        });
      }
    });
  }, []);
  return (
    <>
      {data.id !== undefined ? (
        <div
          className=" text-gray-950 align-items-center"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.7),rgba(0,0,0.95,1), #0D2644), url('https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div class="max-w-4xl h-auto lg:h-screen mx-auto my-32 lg:my-0 py-5 ">
            <div
              id="profile"
              class="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0"
            >
              <div class="p-4 text-center">
                <div
                  class=" rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?size=626&ext=jpg")`,
                  }}
                ></div>

                <h1 class="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                  {data.profile.full_name}
                </h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p class="pt-4 text-base font-bold flex items-center justify-center ">
                  <svg
                    class="h-4 fill-current text-green-700 pr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                  </svg>
                  Email - {data.profile.email_address}
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center ">
                  <svg
                    class="h-4 fill-current text-green-700 pr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                  </svg>
                  Date of birth - {data.profile.date_of_birth.split("T")[0]}
                </p>
                <p class="pt-4 text-base font-bold flex items-center justify-center ">
                  <svg
                    class="h-4 fill-current text-green-700 pr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                  </svg>
                  Phone Number - {data.profile.phone_number}
                </p>

                <p class="pt-4 text-base font-bold flex items-center justify-center  text-center ">
                  <svg
                    class="h-4 fill-current text-green-700 pr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                  </svg>
                  Biography
                </p>
                <p>{data.profile.biography}</p>
                <div class="mt-3 rounded overflow-hidden shadow-lg mb-3 mx-auto bg-cyan-200 bg-opacity-40">
                  <div class="px-6 py-4">
                    <h1 class="text-3xl font-bold pt-8 lg:pt-0 uppercase">
                      {data.opportunity.title}
                    </h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center ">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>
                      Job Type - {data.opportunity.job_type}
                    </p>
                    <p class="pt-4 text-base font-bold flex items-center justify-center ">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>
                      Application deadline -{" "}
                      {data.opportunity.application_deadline.split("T")[0]}
                    </p>
                    <p class="pt-4 text-base font-bold flex items-center justify-center ">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>
                      Estimated salary - {data.opportunity.estimated_salary}
                    </p>

                    <p class="pt-4 text-base font-bold flex items-center justify-center ">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>
                      Description
                    </p>
                    <p>{data.opportunity.description}</p>
                    <p class="pt-4 text-base font-bold flex items-center justify-center ">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                      </svg>
                      Qualifications
                    </p>
                    <p>{data.opportunity.qualifications}</p>
                    <p class="pt-4 text-base font-bold flex items-center justify-center ">
                      <svg
                        class="h-4 fill-current text-green-700 pr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>
                      Responsibilities
                    </p>
                    <p>{data.opportunity.responsibilities}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <img
                src="https://img.freepik.com/free-vector/job-vacancy-background-with-chair-flat-style_23-2147875408.jpg?size=626&ext=jpg"
                class="rounded-none lg:rounded-lg shadow-2xl hidden lg:hidden"
              />
            </div>

            <div class="absolute top-0 right-0 h-12 w-18 p-4">
              <button class="js-change-theme focus:outline-none">🌙</button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </>
  );
};

export default Application;

