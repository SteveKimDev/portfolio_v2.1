import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const Phase3 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp1} className={`cards ${Projects.phaseDiv}`}>
        <h3 className={`green-text ${Projects.detailTitle}`}>
          Streamlined participation in the political process:
        </h3>
        <p className={`${Projects.detailDescription}`}>
          To drive visitor action, we will create a user-friendly action board
          displaying available actions like contacting Congress and signing
          petitions. Clear instructions will be provided for easy engagement and
          seamless participation in the political process on the website.
        </p>
      </animated.div>
    </>
  );
};

export default Phase3;
