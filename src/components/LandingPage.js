import React from "react";
import Header from "./LandingHomePage/Header";
import AboutUs from "./LandingHomePage/AboutUs";
import Team from "./LandingHomePage/Team";
import Feature from "./LandingHomePage/Feature";
import Footer from "./LandingHomePage/Footer";
import "./LandingHomePage/LandingHomePage.css"

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <section id="about" style={{ marginTop: "0em" }}>
          <Header />
        </section>
        <section id="about" style={{ marginTop: "20em" }}>
          <AboutUs />
        </section>
        <section id="team" style={{ marginTop: "20em" }}>
          <Team />
        </section>
        <section id="feature" style={{ marginTop: "20em" }}>
          <Feature />
        </section>
        {/* <section id="footer" style={{ marginBottom: "5px" }}>
          <Footer />
        </section> */}
      </div>
    </>
  );
};

export default LandingPage;
