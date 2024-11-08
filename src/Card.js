import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import Desc from "./Description";
function Card({ imagen, title, link1, desc, img1, img2 }) {
  const [show, setShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <>
      <animated.div
        className={Styles.card}
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <img src={imagen} alt="" />
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <div className={Styles.btnn}>
          <Button text="Demo" link={link1} blank="_blank" />
          <span onClick={() => setShowModal(true)}>
            <Button text="Info" blank="_self" />
          </span>
        </div>
      </animated.div>
      {showModal && (
        <Desc title={title} img1={img1} link1={link1} desc={desc} img2={img2} onClose={()=>setShowModal(false)}/>
      )}
    </>
  );
}

export default Card;
