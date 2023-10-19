import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Persona2Img from './media/02-persona-img-2';

import * as Projects from '../projects.module.css';

const Persona2 = () => {
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
        className={`cards ${Projects.personaDiv2}`}
      >
        {/* Persona img */}
        <Persona2Img />

        {/* persona copy */}
        <div className={`relative ${Projects.personaCopyDiv}`}>
          <p className={`center-horizontal ${Projects.detailDescription}`}>
            The consultation representative wants to facilitate a smooth
            onboarding process, but the lack of basic business information
            before consultation calls leads to delays and frustrations.
          </p>
        </div>
      </animated.div>
    </>
  );
};

export default Persona2;
