import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PersonasTitleDescription = () => {
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
          Solving problems for both sides
        </h2>
        <p className={Projects.contentDescription}>
          To effectively support clients, we also needed to support the
          consultation representative assigned to their website project. By
          synthesizing data from research and discovery, we identified two
          persona types to guide the user's journey and design strategy.
        </p>
      </animated.div>
    </div>
  );
};

export default PersonasTitleDescription;
