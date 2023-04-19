import React from "react";
import Navbar from "./Navbar";
import "./LandingHomePage.css";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <Navbar />
        <div className="headerDefinition">
          <div className="headerTitle">
            <p>/We-ra</p>
            <p>[wera]</p>
          </div>
          <br></br>
          <div className="headerText">
            <p>
              a.k.a /mboka/ is a Kenyan slang meaning work. Commonly associated
              with the youth and some native communities.
            </p>
          </div>
        </div>

        {/* <div className="image-container">
        <img src="https://business.uonbi.ac.ke/sites/default/files/2020-11/job.jpg" alt="Header Image" />
      </div> */}
      </div>
    </>
  );
};

export default Header;
