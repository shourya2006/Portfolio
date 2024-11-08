import "./App.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact({ onClose }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h73ceqw", "template_awmylfr", form.current, {
        publicKey: "fzhDcDvFX7FFj6Eki",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Will be Contacting You Shortly!!");
          onClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Please Fill The Form Correctly or Try again Later!!");
        }
      );
  };
  return (
    <>
      <div className="container" id="contacts">
        <div className="crosss" onClick={onClose}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <form id="contact" ref={form} onSubmit={sendEmail}>
          <h3 style={{ margin: "23px 69px" }}>Contact Form</h3>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabIndex={1}
              required
              autofocus=""
              name="user_name"
            />
          </fieldset>
          <fieldset>
            <input
              required
              placeholder="Your Email Address"
              type="email"
              tabIndex={2}
              name="user_email"
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here...."
              tabIndex={5}
              required
              defaultValue={""}
              name="message"
            />
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              value="Send"
              // onClick={onClose}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Contact;
