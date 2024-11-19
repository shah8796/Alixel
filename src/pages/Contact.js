import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: info@alixelsolution.com</p>
          <p>Phone: +92 123 456 7890</p>
          <p>Address: Lahore, Punjab, Pakistan</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;