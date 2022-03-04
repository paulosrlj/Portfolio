import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then(((data) => {
      setAbouts(data);
    }));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Os meus
        {' '}
        <span>serviços</span>

      </h2>

      <div className="app__profiles">
        {abouts.map((aboutItem, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1], x: [-100, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={aboutItem.title + index}
          >
            <img src={urlFor(aboutItem.imgUrl)} alt={aboutItem.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{aboutItem.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{aboutItem.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'sobre',
  'app__whitebg',
);
