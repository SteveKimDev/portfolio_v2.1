import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PainPoint2 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 300,
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
      <animated.div
        style={fadeInUp1}
        className={`cards align-center ${Projects.painPointDiv2}`}
      >
        <h3 className={`text-center accent-text ${Projects.detailTitle}`}>
          Information Gathering
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Lack of basic information prior to consultation calls caused delays in
          the onboarding process.
        </p>
      </animated.div>
    </>
  );
};

export default PainPoint2;
