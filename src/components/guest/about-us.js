import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="p-4 lg:p-8  text-white">
        <div>
          <h1 style={{ padding: "30px", color: "black" }} className="text-center text-3xl font-bold">About Us</h1>
        </div>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?size=626&ext=jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div
              className="flex flex-col justify-center flex-1 p-6 "
              style={{ backgroundColor: " #0D2644" }}
            >
              <h3 className="text-3xl font-bold">Welcome to Wera</h3>
              <p className="my-6 text-white">
                "Your gateway to endless career possibilities! We are dedicated
                to connecting talented individuals with top employers and
                helping you achieve your professional goals. Explore our job
                listings and let us help you find your dream career today!"
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?size=626&ext=jpg"
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
              src="https://img.freepik.com/free-vector/flat-hand-drawn-multitask-business-woman-illustrated_23-2148855947.jpg?size=626&ext=jpg"
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

{
}
