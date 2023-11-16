import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import ActionBoardImg from './media/05-action-board-img';
import TakeActionImg from './media/06-take-action-img';
import CongratsImg from './media/07-congrats-img';

import * as Projects from '../projects.module.css';

const Phase3 = () => {
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
          Streamlined participation in the political process:
        </h3>
        <ActionBoardImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To streamline political participation, we adopted a user-focused
          approach. We introduced a user-friendly action board featuring various
          engagement options, such as contacting Congress and signing petitions,
          for easy access.
        </p>
        <TakeActionImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To facilitate seamless participation, we provided clear instructions
          for each action, minimizing confusion and friction. Additionally, we
          personalized the actions based on the user's location, tailoring them
          to their congressional district or state.
        </p>
        <CongratsImg />
        <p className={`${Projects.detailDescription}`}>
          By combining a user-friendly action board, clear instructions, and
          location-based personalization, we successfully enhanced political
          participation on the website, achieving our goal of fostering seamless
          and impactful engagement.
        </p>
      </animated.div>
    </>
  );
};

export default Phase3;
