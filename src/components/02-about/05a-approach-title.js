import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const ApproachTitle = () => {
  const SelectedWorks = ['M', 'y', 'A', 'p', 'p', 'r', 'o', 'a', 'c', 'h'];

  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp0 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 100,
    config: { duration: 500 },
  });

  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 200,
    config: { duration: 500 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 300,
    config: { duration: 500 },
  });

  const fadeInUp3 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 400,
    config: { duration: 500 },
  });

  const fadeInUp4 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 500,
    config: { duration: 500 },
  });

  const fadeInUp5 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 600,
    config: { duration: 500 },
  });

  const fadeInUp6 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 700,
    config: { duration: 500 },
  });

  const fadeInUp7 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 800,
    config: { duration: 500 },
  });

  const fadeInUp8 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 900,
    config: { duration: 500 },
  });

  const fadeInUp9 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 1000,
    config: { duration: 500 },
  });

  return (
    <div className={`${About.titleLine} ${About.approachTitleDiv}`}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <div className={`${About.titleLine}`}>
        {/* My */}
        <animated.h1 style={fadeInUp0} className={`green-text`}>
          {SelectedWorks[0]}
        </animated.h1>
        <animated.h1 style={fadeInUp1} className={`green-text space `}>
          {SelectedWorks[1]}
        </animated.h1>
      </div>

      <div className={`${About.titleLine}`}>
        {/* Approach */}
        <animated.h1 style={fadeInUp2} className={`green-text`}>
          {SelectedWorks[2]}
        </animated.h1>
        <animated.h1 style={fadeInUp3} className={`green-text`}>
          {SelectedWorks[3]}
        </animated.h1>
        <animated.h1 style={fadeInUp4} className={`green-text`}>
          {SelectedWorks[4]}
        </animated.h1>
        <animated.h1 style={fadeInUp5} className={`green-text`}>
          {SelectedWorks[5]}
        </animated.h1>
        <animated.h1 style={fadeInUp6} className={`green-text`}>
          {SelectedWorks[6]}
        </animated.h1>
        <animated.h1 style={fadeInUp7} className={`green-text`}>
          {SelectedWorks[7]}
        </animated.h1>
        <animated.h1 style={fadeInUp8} className={`green-text`}>
          {SelectedWorks[8]}
        </animated.h1>
        <animated.h1 style={fadeInUp9} className={`green-text`}>
          {SelectedWorks[9]}
        </animated.h1>
      </div>
    </div>
  );
};

export default ApproachTitle;
