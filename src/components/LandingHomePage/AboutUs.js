import React from "react";
import "./LandingHomePage.css";

const AboutUs = () => {
  return (
    <>
      <section className="p-4 lg:p-8  text-white">
        <div>
          <h1 style={{ padding: "30px", color: "black" }}>About Us</h1>
        </div>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-candidates_1262-19874.jpg?w=996&t=st=1681966015~exp=1681966615~hmac=7eed9db41258a3d078cfb9a13af3ad5e35f3bc52141a4c5bcb0298e0c5c98d22"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div
              className="flex flex-col justify-center flex-1 p-6 "
              style={{ backgroundColor: " #0D2644" }}
            >
              <h3 className="text-3xl font-bold">Welcome to Wera</h3>
              <p className="my-6 dark:text-gray-200">
                "Your gateway to endless career possibilities! We are dedicated
                to connecting talented individuals with top employers and
                helping you achieve your professional goals. Explore our job
                listings and let us help you find your dream career today!"
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://img.freepik.com/free-photo/woman-looking-through-magnifying-glass_1187-1250.jpg?w=1380&t=st=1681965851~exp=1681966451~hmac=ff8e67a0ea22dbdd676cca04c4eddef4518a966f926d19f7a5425ac7e614e73f"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div
              className="flex flex-col justify-center flex-1 p-6 "
              style={{ backgroundColor: " #0D2644" }}
            >
              <h3 className="text-3xl font-bold">OUR MISSION</h3>
              <p className="my-6 dark:text-gray-200">
                To provide exceptional job placement services to job seekers
                while helping companies(employers) find the best candidates for
                their open positions.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://img.freepik.com/free-photo/diverse-group-candidates-waiting-line-meet-with-hr-team-career-opportunity-discussion-nervous-people-sitting-office-lobby-expecting-attend-job-interview-meeting_482257-44170.jpg?w=1380&t=st=1681965959~exp=1681966559~hmac=33f069b2ceca46b01a83a6465d19b6794a407caf70ce6eb2a56d76f3e0402dda"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div
              className="flex flex-col justify-center flex-1 p-6 "
              style={{ backgroundColor: " #0D2644" }}
            >
              <h3 className="text-3xl font-bold">OUR VISION</h3>
              <p className="my-6 dark:text-gray-200">
                Become a leading job agency company that is recognized for its
                commitment to excellence, integrity, and innovation. We envision
                a future where every job seeker has access to meaningful
                employment opportunities, and every employer has access to
                top-tier talent. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
