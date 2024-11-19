import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';

const MotionDiv = motion.div;

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <MotionDiv
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </MotionDiv>
  );
};

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Empowering Tomorrow <br/> Through Technology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-subtitle"
        >
          Cutting-edge IT solutions for businesses and individuals
        </motion.p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </section>

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

      <FadeInWhenVisible>
        <section className="about-preview">
          <h2>About Alixel Solution</h2>
          <p>Founded in 2024, we're committed to driving digital transformation and crafting intelligent systems that work for you.</p>
          <motion.button 
            className="learn-more-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="contact-preview">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can empower your business with cutting-edge technology.</p>
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