import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const Testmonials1 = () => {
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
        "I've had the pleasure to work with Steve on several projects and his
        design skills and expertise in web development are invaluable! He's the
        kind of unicorn every web development team wants in their corner. He not
        only has a keen eye for great web user experiences but also can code up
        the animations and designs so business stakeholders can see it in action
        and developers can get a clearer picture of what is required. His
        ability to work across team functions make him a valued collaborator who
        is able to easily bridge the gap between design and development."
      </animated.p>
      <animated.h3 style={fadeInUp2} className={About.testimonialSubtitle}>
        <strong>Natalie Cervantes</strong>
        <br />
        First String Digital
      </animated.h3>
    </div>
  );
};

export default Testmonials1;
