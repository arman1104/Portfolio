import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false); // State to track the sending status
  const [statusMessage, setStatusMessage] = useState(""); // State for the status message
  const [statusType, setStatusType] = useState(""); // State for the type of status (success or error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(""); // Clear any previous status message
    setStatusType(""); // Clear the status type

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
          setStatusMessage("Message sent successfully!");
          setStatusType("success"); // Set type to success
          setFormData({ from_name: "", reply_to: "", message: "" });
          setIsSending(false);

          // Remove the message after 3 second
          setTimeout(() => {
            setStatusMessage("");
          }, 3000);
        },
        (error) => {
          console.error(error);
          setStatusMessage("Failed to send message. Please try again.");
          setStatusType("error"); // Set type to error
          setFormData({ from_name: "", reply_to: "", message: "" });
          setIsSending(false);

          // Remove the message after 3 second
          setTimeout(() => {
            setStatusMessage("");
          }, 3000);
        }
      );
  };

  return (
    <div>
      <section className="contact-container">
        <h1>Contact</h1>
        <form id="contact-form" className="form-container" onSubmit={sendEmail}>
          <div className="name-container">
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Enter your name"
              required
              autoComplete="name"
              value={formData.from_name}
              onChange={handleChange}
            />
          </div>

          <div className="email-container">
            <label htmlFor="reply_to">Email</label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              placeholder="Enter your email"
              required
              autoComplete="email"
              value={formData.reply_to}
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
        {/* Display the status message with dynamic color */}
        {statusMessage && (
          <p
            className={`status-message ${
              statusType === "success" ? "success" : "error"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default Contact;
