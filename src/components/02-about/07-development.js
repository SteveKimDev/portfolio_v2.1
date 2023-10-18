import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const Development = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // fade animation
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    config: { duration: 1000 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    delay: 1000,
    config: { duration: 1000 },
  });
  return (
    <div className='cards'>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.h3 style={fadeInUp1} className={About.approachSubtitle}>
        Development
      </animated.h3>
      <animated.p style={fadeInUp2} className={About.approachDescription}>
        I closely collaborate with developers to bring our shared vision to
        life. Through open communication and iterative design processes, we
        ensure technical feasibility and create cohesive products that
        seamlessly blend design and technology.
      </animated.p>
    </div>
  );
};

export default Development;
