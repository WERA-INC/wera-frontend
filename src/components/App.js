
import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./LandingPage";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingpage" element={<LandingPage />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
