import "./App.css";
import React, { useState } from "react";
import pfp from "./image/pfp.jpg";
import icon1 from "./image/Photoshop.webp";
import icon2 from "./image/adobe.avif";
import icon3 from "./image/React.webp";
import icon4 from "./image/dia2.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Home() {
  const [countOn, setCounterOn] = useState(false);
  return (
    <section id="about">
      <ScrollTrigger onEnter={() => setCounterOn(true)}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f7fff0",
          }}
        >
          <div>
            <img src={pfp} className="ab-img" />
          </div>
          <div className="floating-image">
            <img src={icon1} id="floatimg1" />
          </div>
          <div className="floating-image">
            <img src={icon2} id="floatimg2" />
          </div>
          <div className="floating-image">
            <img src={icon3} id="floatimg3" />
          </div>
          <div className="floating-image">
            <img src={icon4} id="floatimg4" />
          </div>
          <div className="container">
            <h1 className="ab-heading">My Skills</h1>
            <p style={{ width: "73%" }} className="ab-p">
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account the system and expound the actual and praising pain was
              born
            </p>
            <div className="skills">
              <div className="inner-grid">
                <div className="item1 item">
                  <h2>
                    {countOn && (
                      <CountUp start={0} end={75} duration={3} delay={0.2} />
                    )}
                    %
                  </h2>
                  <h4>Python</h4>
                </div>
              </div>
              <div className="inner-grid">
                <div className="item2 item">
                  <h2>
                    {countOn && (
                      <CountUp start={0} end={99} duration={3} delay={0.2} />
                    )}
                    %
                  </h2>
                  <h4>HTML</h4>
                </div>
              </div>
              <div className="inner-grid">
                <div className="item3 item">
                  <h2>
                    {countOn && (
                      <CountUp start={0} end={80} duration={3} delay={0.2} />
                    )}
                    %
                  </h2>
                  <h4>CSS</h4>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="inner-grid">
                <div className="item4 item" style={{ padding: "9px 42px" }}>
                  <h2>
                    {countOn && (
                      <CountUp start={0} end={75} duration={3} delay={0.2} />
                    )}
                    %
                  </h2>
                  <h4>JavaScript</h4>
                </div>
              </div>
              <div className="inner-grid">
                <div className="item5 item">
                  <h2>
                    {countOn && (
                      <CountUp start={0} end={60} duration={3} delay={0.2} />
                    )}
                    %
                  </h2>
                  <h4>React</h4>
                </div>
              </div>
              <div className="inner-grid">
                <div className="item6 item">
                  <h2>
                    {countOn && (
                      <CountUp start={0} end={80} duration={3} delay={0.2} />
                    )}
                    %
                  </h2>
                  <h4>Django</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
}

export default Home;
