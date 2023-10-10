import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const Testmonials2 = () => {
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
      <animated.p style={fadeInUp1} className={About.testimonialDescription}>
        "Steve is highly professional and an extremely talented and creative web
        designer. He redesigned our entire website from scratch and we are very
        pleased with the result. He not only made our website aesthetically
        pleasing and easy to navigate through, but he also implemented
        strategies to increase our exposure on the internet and to measure our
        analytics."
      </animated.p>
      <animated.h3 style={fadeInUp2} className={About.testimonialSubtitle}>
        <strong>Hyon Yun</strong>
        <br />
        English Book Ladder
      </animated.h3>
    </div>
  );
};

export default Testmonials2;
