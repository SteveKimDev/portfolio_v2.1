import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const Design = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // fade animation
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    config: { duration: 1000 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    delay: 1000,
    config: { duration: 1000 },
  });
  return (
    <div className={About.card}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.h3 style={fadeInUp1} className={About.approachSubtitle}>
        Design
      </animated.h3>
      <animated.p style={fadeInUp2} className={About.approachDescription}>
        Creating visually appealing minimalist websites that strike a balance
        between creativity and functionality, my expertise lies in seamlessly
        integrating key elements of company branding, such as color schemes,
        typography, and visual motifs, to create a cohesive and memorable user
        experience.
      </animated.p>
    </div>
  );
};

export default Design;
