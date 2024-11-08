import "./App.css";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Home({onOpen}) {
  const [typeEffect] = useTypewriter({
    words: ["Developer", "Designer", "Content Creator"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 120,
  });
  return (
    <>
      <div className="home" id="home">
        <div className="content">
          <h2>Hello,</h2>
          <h1>I Am Shourya.</h1>
          <h3>
            <span style={{ color: "#59c378"}}>
              {typeEffect}
            </span>
            <span>
              <Cursor />
            </span>
          </h3>
          <div className="para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p> Pariatur, ullam eius. Vero magnam aperiam ea.</p>
          </div>
          <a id="home-ele" onClick={onOpen} style={{cursor:"pointer"}}>
            <span>Get-in Touch</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
