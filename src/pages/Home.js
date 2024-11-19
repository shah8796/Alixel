// Home.js

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { Typed } from 'react-typed'; // Ensure this import is correct based on your `react-typed` version
import { useInView } from 'react-intersection-observer';
import laptopImage from '../images/laptop.jpeg';
import './Home.css';

// Import the WebDevelopmentSection component
import WebDevelopmentSection from '../components/WebDevelopmentSection'; // Adjust the path if necessary

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX - rect.width / 2);
    y.set(mouseY - rect.height / 2);
  };

  useEffect(() => {
    if (titleRef.current) {
      new Typed(titleRef.current, {
        strings: [
          'Empowering Tomorrow',
          'Through Technology',
          'With Innovation',
        ],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true,
      });
    }

    if (subtitleRef.current) {
      new Typed(subtitleRef.current, {
        strings: [
          'Cutting-edge IT solutions for businesses and individuals',
          'Web Development • AI & ML • Data Science • Web 3.0',
        ],
        typeSpeed: 30,
        backSpeed: 30,
        loop: true,
      });
    }
  }, []);

  return (
    <div className="home">
      <section className="hero" onMouseMove={handleMouseMove}>
        <div className="hero-content">
          <div className="hero-text">
            <FadeInWhenVisible>
              <motion.h1 className="hero-title">
                <span ref={titleRef}></span>
              </motion.h1>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <motion.p className="hero-subtitle">
                <span ref={subtitleRef}></span>
              </motion.p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <motion.button
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </FadeInWhenVisible>
          </div>
          <motion.div
            className="hero-image"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={laptopImage} alt="Software Development Illustration" />
          </motion.div>
        </div>
      </section>

      {/* Include Web Development Section */}
      <FadeInWhenVisible>
        <WebDevelopmentSection />
      </FadeInWhenVisible>

      {/* Services Overview Section */}
      <FadeInWhenVisible>
        <section className="services-overview">
          <h2>Our Services</h2>
          <div className="service-cards">
            <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
              <h3>Web Development</h3>
              <p>Building intuitive and responsive websites</p>
            </motion.div>
            <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
              <h3>Web 3.0 Integration</h3>
              <p>Pioneering advanced decentralized applications</p>
            </motion.div>
            <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
              <h3>AI & Machine Learning</h3>
              <p>Harnessing the power of intelligent systems</p>
            </motion.div>
            <motion.div className="service-card" whileHover={{ scale: 1.05 }}>
              <h3>Data Science</h3>
              <p>Unlocking insights from complex data sets</p>
            </motion.div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* About Preview Section */}
      <FadeInWhenVisible>
        <section className="about-preview">
          <h2>About Alixel Solution</h2>
          <p>
            Founded in 2024, we're committed to driving digital transformation
            and crafting intelligent systems that work for you.
          </p>
          <motion.button
            className="learn-more-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </section>
      </FadeInWhenVisible>

      {/* Contact Preview Section */}
      <FadeInWhenVisible>
        <section className="contact-preview">
          <h2>Ready to Get Started?</h2>
          <p>
            Let's discuss how we can empower your business with cutting-edge
            technology.
          </p>
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </section>
      </FadeInWhenVisible>
    </div>
  );
}

export default Home;
