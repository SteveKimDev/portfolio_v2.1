import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const MobileScreenCopy = () => {
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
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp1}>
        <h2 className={`green-text ${Projects.contentTitle}`}>
          Responsive down to mobile
        </h2>
        <p className={Projects.contentDescription}>
          The website was designed to provide a seamless experience for users on
          both desktop and mobile screens. While the website was primarily
          optimized for desktop viewing, the design takes into consideration the
          growing number of users accessing the web on mobile devices. The
          website is built to be fully responsive, meaning that the layout and
          content adjusts to the size of the screen, ensuring a consistent and
          engaging experience for users on any device. The aim is to provide an
          optimal experience for all users, no matter the screen size.
        </p>
      </animated.div>
    </>
  );
};

export default MobileScreenCopy;
