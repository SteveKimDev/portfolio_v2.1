import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const UserFlowTitleDescription = () => {
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
        <h2 className={`accent-text ${Projects.contentTitle}`}>
          Content migration Strategy
        </h2>
        <p className={`mb-3 ${Projects.contentDescription}`}>
          Content migration was a crucial part of NUSA's website development,
          ensuring a seamless transition from Drupal to WordPress. We used both
          automated and manual methods for efficiency and accuracy.
        </p>
        <p className={`${Projects.contentDescription}`}>
          For precise content adaptation, manual migration was used for the main
          page content and media elements, where I constructed layouts and added
          content in WordPress.
        </p>
      </animated.div>
    </div>
  );
};

export default UserFlowTitleDescription;
