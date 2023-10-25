import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PersonasCopy = () => {
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
          Who are we designing for?
        </h2>
        <p className={Projects.contentDescription}>
          The ultimate goal is to understand and empathize with the end users,
          and to deliver a website design that is both engaging and usable. To
          achieve this, the research and discovery data was synthesized to
          create two persona types, which served as a foundation for the website
          design strategy and helped to guide the content delivery approach.
        </p>
      </animated.div>
    </div>
  );
};

export default PersonasCopy;
