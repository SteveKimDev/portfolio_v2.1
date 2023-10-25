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
    delay: 200,
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
        <h3 className={`text-center green-text ${Projects.detailTitle}`}>
          Poor Design
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Inconsistent design, lack of mobile responsiveness, and a poorly
          designed layout, caused frustration.
        </p>
      </animated.div>
    </>
  );
};

export default PainPoint2;
