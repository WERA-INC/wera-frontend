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
        <section id="about" style={{ marginTop: "15em" }}>
          <AboutUs />
        </section>
        <section id="team" style={{ marginTop: "20em" }}>
          <Team />
        </section>
        <section id="featureSection" style={{ marginTop: "0em" }}>
          <Feature />
        </section>
        <section id="footerSection" style={{ marginTop: "50em" }} >
          <Footer />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
