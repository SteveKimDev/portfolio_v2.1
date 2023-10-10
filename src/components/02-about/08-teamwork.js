import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const Teamwork = () => {
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
        Teamwork
      </animated.h3>
      <animated.p style={fadeInUp2} className={About.approachDescription}>
        With open communication and effective collaboration, I bring website
        concepts to life by working closely with cross-functional teams. I work
        tirelessly to meet client needs and goals, providing transparent, honest
        feedback to deliver successful website products.
      </animated.p>
    </div>
  );
};

export default Teamwork;
