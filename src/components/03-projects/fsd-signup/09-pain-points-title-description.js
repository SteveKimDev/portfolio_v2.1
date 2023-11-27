import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PaingPointsTitleDescription = () => {
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
          Frustrations and pain points
        </h2>
        <p className={Projects.contentDescription}>
          Through research, interviews, and data gathering, three recurring
          frustrations and pain points in the onboarding process faced by both
          clients and team members were identified and prioritized.
        </p>
      </animated.div>
    </div>
  );
};

export default PaingPointsTitleDescription;
