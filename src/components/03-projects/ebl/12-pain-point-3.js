import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PainPoint3 = () => {
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
        className={`cards align-center ${Projects.painPointDiv3}`}
      >
        <h3 className={`text-center green-text ${Projects.detailTitle}`}>
          Language Gap
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          A mixture of Korean and English language content was found to be
          confusing and a negative experience.
        </p>
      </animated.div>
    </>
  );
};

export default PainPoint3;
