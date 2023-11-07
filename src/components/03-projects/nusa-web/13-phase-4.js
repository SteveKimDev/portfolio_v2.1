import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const Phase4 = () => {
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
        className={`cards ${Projects.phaseDivLast}`}
      >
        <h3 className={`green-text ${Projects.detailTitle}`}>
          Donations Integration:
        </h3>
        <p className={`${Projects.detailDescription}`}>
          In order to optimize the donation collection process, we will enhance
          website functionality by incorporating a prominent and easily
          accessible donation button and intuitive easy to complete forms.
          Moreover, we will provide visitors with comprehensive information on
          the positive impact of their contributions and offer versatile
          options, including one-time and recurring donations, to encourage
          greater financial support.
        </p>
      </animated.div>
    </>
  );
};

export default Phase4;
