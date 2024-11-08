// import "./App.css";
import "./Project.css";
import Nav from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Projects";
import { useState } from "react";
// import Desc from "./Description";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Nav onOpen={() => setShowModal(true)} />
      <Home onOpen={() => setShowModal(true)} />
      <About />
      <Project />
      {/* <Desc /> */}
      {/* <Contact /> */}
      {showModal && <Contact onClose={() => setShowModal(false)} />}
    </>
  );
}

export default App;
