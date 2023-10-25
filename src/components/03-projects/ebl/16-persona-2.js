import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Persona2Img from './media/03-img-persona-2';

import * as Projects from '../projects.module.css';

const Persona2 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 200,
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
            A corporate professional looking for an adult English class, wants a
            website with a Korean language option to be able to read and find
            the content he needs to sign up for the right classes.
          </p>
        </div>
      </animated.div>
    </>
  );
};

export default Persona2;
