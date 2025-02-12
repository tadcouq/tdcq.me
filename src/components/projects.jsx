import React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import LetterGlitch from './LetterGlitch';

const Projects = () => {
  return (
    <motion.section
      id="project"
      className="section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={{ height: '100%' , width: '100%' , zIndex: -3 }}>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      </div>
    </motion.section>
  );
};

export default Projects;
