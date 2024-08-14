import React from 'react';
import { motion } from 'framer-motion';
import './LandingSK.css';
import '@fontsource/press-start-2p'; // Adding a retro game-like font

const LandingSurv = (props) => {
  return (
    <div className="landing-container">
      <motion.h1
        className="landing-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Survival Kit
      </motion.h1>
      <motion.p
        className="landing-subtitle"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Connect, Play, Survive.
      </motion.p>
      <motion.div
        className="landing-button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button onClick={props.onNext}>Start</button>
      </motion.div>
    </div>
  );
};

export default LandingSurv;
