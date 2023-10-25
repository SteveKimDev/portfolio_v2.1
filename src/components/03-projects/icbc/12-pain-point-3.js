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
    delay: 500,
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
          Migration
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Took the lead in manually migrating content that could not be
          automated. Offered guidance on necessary modifications or additions to
          Contentful content models. Made significant contributions to the UAT
          process to validate all page content and layouts.
        </p>
      </animated.div>
    </>
  );
};

export default PainPoint3;