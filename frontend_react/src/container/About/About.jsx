import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';

import images from '../../constants/images';

const about = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01 },
  { title: 'Frontent', description: 'I am a good web developer', imgUrl: images.about02 },
  { title: 'Backend', description: 'I am a good web developer', imgUrl: images.about03 },
  { title: 'UI/UX', description: 'I am a good web developer', imgUrl: images.about04 },
];

function About() {
  return (
    <>
      <h2 className="head-text">
        I know that
        {' '}
        <span>Good Development</span>
        {' '}
        <br />
        {' '}
        means
        {' '}
        <span>Good business</span>
      </h2>

      <div className="app__profiles">
        {about.map((aboutItem, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={aboutItem.title + index}
          >
            <img src={aboutItem.imgUrl} alt={aboutItem.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{aboutItem.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{aboutItem.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
