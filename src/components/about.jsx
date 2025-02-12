import React from "react";
import { motion } from "framer-motion";
import Aurora from '../components/aurora';
import "../styles.css";

const About = () => {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        speed={0.5}
      />
      <p>
        Hey, you might know me though something to get here, welcome. 
        I'm a second-year Educational Technology student at Hanoi University of Science and Technology with three years of self-taught coding experience. <br /> 
        I primarily focus on web development, but I also have experience in 2D/3D animation, automation, game development, and more. 
        Additionally, I work as a PC hardware technician, specializing in assembling and repairing desktops and laptops. 
        If you need troubleshooting, hardware replacement or anything, feel free to reach out to me on Discord.
      </p>
    </motion.section>
  );
};

export default About;
