import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PhaseTitleDescription = () => {
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
          A path to achieve NUSA's business goals
        </h2>
        <p className={Projects.contentDescription}>
          During the project's planning kickoff meeting, the stakeholders
          outlined their desired business objectives for the website project.
          Our responsibility was to identify the obstacles preventing them from
          currently achieving these goals and devise effective solutions to
          overcome them.
        </p>
      </animated.div>
    </div>
  );
};

export default PhaseTitleDescription;
