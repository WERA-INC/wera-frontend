import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="landingpage">Landing Page</Link>
      {/* <Link to="contact">Click to view our contact page</Link> */}
    </div>
  );
}

export default Home