import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import DiscoveryPhaseImg from './media/discovery-phase-img';

import * as Projects from '../projects.module.css';

const Phase1 = () => {
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
        className={`cards align-center ${Projects.phaseDiv1}`}
      >
        <h3 className={`text-center green-text ${Projects.detailTitle}`}>
          Discovery Phase
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Conducted a thorough audit of the legacy website, which involved
          scrutinizing not only the page hierarchy, page templates, component
          types, and media asset types but also uncovering any inconsistencies,
          or opportunities for optimization.
        </p>
        <div>
          <DiscoveryPhaseImg />
        </div>
      </animated.div>
    </>
  );
};

export default Phase1;
