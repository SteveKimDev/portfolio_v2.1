import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PainPoint1 = () => {
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
      <animated.div
        style={fadeInUp1}
        className={`cards align-center ${Projects.painPointDiv1}`}
      >
        <h3 className={`text-center accent-text ${Projects.detailTitle}`}>
          Outdated Content
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Outdated and unmanaged content caused frustration among users and
          negatively impacted their experience.
        </p>
      </animated.div>
    </>
  );
};

export default PainPoint1;
