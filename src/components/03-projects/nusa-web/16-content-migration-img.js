import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import ContentMigrationImg from './media/10-content-migration-img';

import * as Projects from '../projects.module.css';

const ContentMigrationImgCard = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp1} className={`cards ${Projects.phaseDiv}`}>
        <ContentMigrationImg />
      </animated.div>
    </>
  );
};

export default ContentMigrationImgCard;
