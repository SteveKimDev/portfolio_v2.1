import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Persona1Img from './media/02-img-persona-1';

import * as Projects from '../projects.module.css';

const Persona1 = () => {
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
        className={`cards ${Projects.personaDiv1}`}
      >
        {/* Persona img */}
        <Persona1Img />

        {/* persona copy */}
        <div className={`relative ${Projects.personaCopyDiv}`}>
          <p className={`center-horizontal ${Projects.detailDescription}`}>
            A mother seeking clear and helpful information about English
            programs for her child. A user-friendly website that would make it
            easy to find the information she needed.
          </p>
        </div>
      </animated.div>
    </>
  );
};

export default Persona1;
