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
        <section id="headerSection" style={{ marginTop: "0em" }}>
          <Header/>
        </section>
        <section id="aboutSection" style={{ marginTop: "0em" }}>
          <AboutUs />
        </section>
        <section id="teamSection" style={{ marginTop: "0em" }}>
          <Team/>
        </section>
        <section id="featureSection" style={{ marginTop: "0em"}}>
          <Feature/>
        </section>
        <section id="footerSection" style={{ marginTop: "0em" }} >
          <Footer />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
