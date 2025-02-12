import React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import FlowingMenu from '../components/FlowingMenu'
import GridDistortion from './GridDistortion';

const contactItems = [
  { link: 'https://github.com/tadcouq', text: 'GitHub' },
  { link: 'https://www.instagram.com/tadcouq._/', text: 'Instagram' },
  { link: 'https://www.facebook.com/tdcq.me/', text: 'Facebook' },
  { link: 'https://steamcommunity.com/id/ChaoticBraindead', text: 'Steam'},
  { link: 'https://discord.gg/E6FKTPQxBd', text: 'Discord'},
  { link: 'mailto:info@tdcq.me', text: 'Email'}
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    > 
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <GridDistortion
          imageSrc="https://picsum.photos/1920/1080?grayscale"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />
      </div>
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={contactItems} />
      </div>
    </motion.section>
  );
};

export default Contact;