import React, { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form ke data ko aapki email pr send karega
    const mailtoLink = `mailto:sa23515193@gmail.com?subject=New message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <div className="contact-buttons">
        <a href="https://wa.me/923170763598" className="chat-btn" target="_blank">
          Chat Now
        </a>

        <a href="mailto:sa23515193@gmail.com" className="email-btn">
          Email Me
        </a>
      </div>

      
        
    </div>
  );


}

export default Contact;