import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const ScreenshotCopy = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <div className={Projects.titleDiv}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp1}>
        <h2 className={`accent-text ${Projects.contentTitle}`}>
          Clean layouts deliver clear information
        </h2>
        <p className={Projects.contentDescription}>
          Designed to put the focus on Natalie's professional work, with an
          emphasis on simplicity and ease of navigation. The layout is
          structured to minimize confusion and reduce the number of clicks
          needed to access information, with a focus on delivering the necessary
          content in a straightforward and engaging way. The goal is to
          effectively present Natalie's story and skills, encouraging users to
          stay engaged, take action, and get a complete picture of her
          professional expertise.
        </p>
      </animated.div>
    </div>
  );
};

export default ScreenshotCopy;
