import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false); // State to track the sending status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true when sending begins

    emailjs
      .send(
        "service_7rayd0r",
        "template_aysxwub",
        formData,
        "LNAJki6db9Lil9fVR"
      )
      .then(
        (result) => {
          console.log(result);
          alert("Message sent successfully!");

          // Clear form data after successful email send
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setIsSending(false); // Reset sending state after success
        },
        (error) => {
          console.error(error);
          alert("Failed to send message, please try again.");
          setIsSending(false); // Reset sending state after failure
        }
      );
  };

  return (
    <div>
      <section className="contact-container">
        <h1>Contact</h1>
        <form id="contact-form" className="form-container" onSubmit={sendEmail}>
          <div className="name-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="msg-container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              required
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
