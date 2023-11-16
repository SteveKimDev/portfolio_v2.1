import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import HomepageScreenshotImg from './media/01-homepage-screenshot-img';

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
      <animated.div style={fadeInUp1} className={`cards ${Projects.phaseDiv}`}>
        <h3 className={`green-text ${Projects.detailTitle}`}>
          Boost sign-up rates among the 20-40 year old demographic:
        </h3>
        <HomepageScreenshotImg />
        <p className={`${Projects.detailDescription}`}>
          We conducted extensive user research and created five distinct
          personas types and user's journey representing a diverse user base.
          This user-centered approach allowed us to revamp the website
          effectively, aligning it with the preferences and expectations of the
          younger demographic. The result was a visually appealing, modern
          design that successfully attracted and engaged the desired audience,
          leading to increased sign-up rates and achieving our business goal.
        </p>
      </animated.div>
    </>
  );
};

export default Phase1;
