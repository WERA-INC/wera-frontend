import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./LandingHomePage/Header";
import AboutUs from "./LandingHomePage/AboutUs";
import Team from "./LandingHomePage/Team";
import Feature from "./LandingHomePage/Feature";
import Footer from "./LandingHomePage/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <Header />
        <div className="aboutSection" id="about" style={{ marginTop: "35em" }}>
          <AboutUs />
        </div>
        <div className="teamSection" id="team" style={{ marginTop: "30em" }}>
          <Team />
        </div>
        <div className="featureSection" id="feature" style={{ marginTop: "30em" }}>
          <Feature />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
