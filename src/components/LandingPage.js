import React from "react";
import { Container } from "semantic-ui-react";
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
        <Header />
        <section id="about" style={{ marginTop: "35em" }}>
          <AboutUs />
        </section>
        <section id="team" style={{ marginTop: "20em" }}>
          <Team />
        </section>
        <section id="feature" style={{ marginTop: "20em" }}>
          <Feature />
        </section>
        <section id="footer" style={{ marginTop: "20em" }}>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
