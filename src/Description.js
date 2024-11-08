import "./Project.css";
import { useEffect, useRef } from "react";
import Button from "./Button";
function Desc({ title, desc, img1, img2, link1, onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <>
      <div className="popup" ref={modalRef} onClick={closeModal}>
        <div className="cross">
          <i class="fa-solid fa-xmark" onClick={onClose}></i>
        </div>
        <h1 style={{ position: "fixed", top: "4.5pc" }}>
          {/* Youtube Clone */}
          {title}
        </h1>
        <div className="main-container">
          <div className="inner-container">
            <div className="inner-1">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
            <div className="inner-2">
              <h1>Description...</h1>
              <p>
                {/* This is a Youtube Clone. Made through React-Redux; And is Fully
                Functional and Works on Youtube API to Fetch Data. */}
                {desc}
              </p>
              <div style={{ padding: "20px 0px" }}>
                <Button text="Demo" link={link1} blank="_blank" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Desc;
