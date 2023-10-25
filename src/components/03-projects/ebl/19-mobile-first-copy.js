import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const MobileFirstCopy = () => {
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
        <h2 className={`green-text ${Projects.contentTitle}`}>
          Designed for a seamless and usuable mobile experience
        </h2>
        <p className={Projects.contentDescription}>
          Given the high percentage (over 95%) of the Korean population using
          mobile phones as their main device for online searches, it was crucial
          to prioritize a mobile-first design approach for the website. This
          ensured that users would have a seamless and optimized experience,
          regardless of the device they used to access the site.
        </p>
      </animated.div>
    </div>
  );
};

export default MobileFirstCopy;
