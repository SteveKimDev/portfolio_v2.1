import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const UserFlowTitleDescription = () => {
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
          A path to improving overall experience
        </h2>
        <p className={Projects.contentDescription}>
          Our solution created a direct and simple path. Our user flow and
          design provided a streamlined and efficient user experience, reducing
          confusion and delays by offering clear instructions and manageable
          tasks.
        </p>
      </animated.div>
    </div>
  );
};

export default UserFlowTitleDescription;
