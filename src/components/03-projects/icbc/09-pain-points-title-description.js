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
        <h2 className={`green-text ${Projects.contentTitle}`}>
          Discovery, Definition, and Migration
        </h2>
        <p className={Projects.contentDescription}>
          The Discovery and Definition phases are pivotal for a successful
          content migration project. They provide a solid foundation by
          comprehensively understanding the existing content, creating a clear
          roadmap, and addressing potential issues.
        </p>
      </animated.div>
    </div>
  );
};

export default PaingPointsTitleDescription;
