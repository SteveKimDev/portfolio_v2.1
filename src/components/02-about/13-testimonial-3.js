import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const Testmonials3 = () => {
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
      <animated.p style={fadeInUp1} className={About.testimonialDescription}>
        "Our company was in search of a new and updated web design  and we found
        Steve Kim. Through his design and his efforts he was able to bring out
        the very best in what we were looking for in a web design. We couldn't
        be more pleased with his attention to detail and his efforts to stay in
        contact with us throughout the process in the future we will certainly
        be looking forward to working with Steve again."
      </animated.p>
      <animated.h3 style={fadeInUp2} className={About.testimonialSubtitle}>
        <strong>Darrell Collins</strong>
        <br />
        OFC inc.
      </animated.h3>
    </div>
  );
};

export default Testmonials3;
