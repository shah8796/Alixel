import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>We create responsive, user-friendly websites tailored to your needs.</p>
        </div>
        <div className="service-item">
          <h2>Web 3.0 Integration</h2>
          <p>Leverage the power of decentralized technologies in your applications.</p>
        </div>
        <div className="service-item">
          <h2>AI & Machine Learning</h2>
          <p>Implement intelligent systems to automate and optimize your processes.</p>
        </div>
        <div className="service-item">
          <h2>Data Science</h2>
          <p>Extract valuable insights from your data to drive informed decision-making.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;