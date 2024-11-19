// WebDevelopmentSection.js
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./WebDevelopmentSection.css";

// Import FeatureCard
import FeatureCard from './FeatureCard'; // Adjust the path if necessary

// Images
import Image1 from "../images/NB6CYHPXuctbZAbpeleck.jpg";
import Image2 from "../images/W_YUjm4fcmQovnXAWIQeA.jpg";
import Image3 from "../images/yFI5iCJVWef0uQmTYpzNt.jpg";

function WebDevelopmentSection() {
    // Reference to the container for mouse movement calculations
    const containerRef = useRef(null);

    // Motion values for mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // State to store container dimensions
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    // Update container size on mount and when window is resized
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setContainerSize({ width, height });
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // Calculate offsets based on mouse position
    const xOffset = useTransform(
        mouseX,
        [0, containerSize.width],
        [-30, 30] // Adjust the range as needed
    );
    const yOffset = useTransform(
        mouseY,
        [0, containerSize.height],
        [-10, 10] // Adjust the range as needed
    );

    // Update mouse position
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                mouseX.set(x);
                mouseY.set(y);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // Define the features array
    const features = [
        {
            title: "Responsive Design",
            backText: "Adapts to any screen size from mobile to desktop.",
        },
        {
            title: "Modern Technologies",
            backText: "Built with React, Next.js, and other tech stacks.",
        },
        {
            title: "Global Reach",
            backText: "Optimized for search engines and international audiences.",
        },
        {
            title: "Performance Optimization",
            backText: "Optimized assets for maximum speed.",
        },
    ];

    return (
        <section className="web-dev-section">
            <div className="web-dev-container" ref={containerRef}>
                <div className="web-dev-content">
                    {/* Left Images with Mouse Animation */}
                    <div className="web-dev-left">
                        <motion.div
                            className="web-dev-images"
                            style={{ x: xOffset, y: yOffset }}
                        >
                            <div className="images-grid">
                                {[Image1, Image2, Image3].map((img, index) => (
                                    <motion.div
                                        key={index}
                                        className="image-wrapper"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img src={img} alt={`Web Development ${index + 1}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Info Section */}
                    <div className="web-dev-right">
                        <div className="web-dev-info">
                            <h2 className="section-title">Web Development</h2>
                            <p className="section-description">
                                We create stunning, responsive, and user-friendly websites
                                tailored to elevate your online presence. From modern UI/UX
                                designs to dynamic functionalities, our solutions are built to
                                deliver excellence.
                            </p>
                            <div className="features-grid">
                                {features.map((feature, index) => (
                                    <FeatureCard key={index} {...feature} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebDevelopmentSection;
