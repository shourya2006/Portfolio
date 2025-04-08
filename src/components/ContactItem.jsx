import React from 'react';

const ContactItem = ({ type, value, icon }) => {
  return (
    <div className="contact-item">
      <div className="contact-icon">
        {icon}
      </div>
      <div>
        <h3 className="contact-label">{type}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ContactItem; 