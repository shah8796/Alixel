// FeatureCard.js
// Should only import necessary modules, not WebDevelopmentSection or any module that imports it
import React, { useState } from "react";
import { motion } from "framer-motion";
import './FeatureCard.css';


const FeatureCard = ({ title, backText }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="feature-card" onClick={() => setIsFlipped(!isFlipped)}>
            <motion.div
                className="feature-content"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Front Face */}
                <div className="feature-face front">
                    <h3 className="text-green-400 text-xl font-bold">{title}</h3>
                </div>
                {/* Back Face */}
                <div className="feature-face back">
                    <p className="text-white text-lg">{backText}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default FeatureCard;
