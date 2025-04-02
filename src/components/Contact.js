import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's talk about your project</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-title">Let's create something amazing together!</h3>
          <p className="contact-text">
            Whether you have a project in mind or just want to say hello, I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">@</div>
              <div>Shourya.bafna2024@nst.rishihood.edu.in</div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">📱</div>
              <div>+91 70021 79266</div>
            </div> 
            <div className="contact-detail">
              <div className="contact-icon">📍</div>
              <div>Ahmedabad, Gujarat</div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" className="form-control" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
