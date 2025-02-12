import React from "react";
import { motion } from "framer-motion";
import Iridescence from '../components/Iridescence';
import DecryptedText from './DecryptedText';
import TrueFocus from './TrueFocus';
import "../styles.css";

const Landing = () => {
  return (

    <motion.section
      id="landing"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />

      <div style={{ marginTop: '4rem' }}>
        <TrueFocus 
          sentence="BREAK THE OBSTACLES"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      <br />
      <div style={{ marginTop: '4rem' }}>
        <DecryptedText
          text="4rever rebl 🏎️"
          animateOn="view"
          revealDirection="center"
          speed="50"
          sequential="true"
        />
      </div>

    </motion.section>
  );
};

export default Landing;
