import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const UserFlow2 = () => {
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
        className={`round ${Projects.flowCardsDiv}`}
      >
        <div className={Projects.flowDescription}>
          <div className={`accent-text ${Projects.flowNumber}`}>2</div>
          <div>
            Account
            <br />
            Created
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default UserFlow2;
