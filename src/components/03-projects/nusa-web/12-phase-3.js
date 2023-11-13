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
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To streamline participation in the political process, we implemented a
          strategic approach centered on user engagement and relevance.
        </p>
        <ActionBoardImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          Firstly, we introduced a user-friendly action board prominently on the
          website. This action board displayed a variety of available actions,
          including activities like contacting Congress and signing petitions.
          The goal was to present visitors with a menu of engagement
          opportunities that were easily accessible and visually appealing.
        </p>
        <TakeActionImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To ensure that visitors could seamlessly participate in the political
          process, we provided clear and concise instructions alongside each
          action. These instructions guided users on how to take specific
          actions effectively, eliminating any potential confusion and reducing
          friction in the participation process.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          A key aspect of our approach involved personalization based on the
          user's residency. We used account information to determine where the
          user resided, and this information was used to present the most
          relevant actions to them. For instance, if a user visited the website
          from a specific congressional district, they would be shown actions
          that directly pertained to their district or state. This level of
          customization ensured that users were presented with actions that had
          a direct impact on their local political landscape, increasing the
          likelihood of their active engagement.
        </p>
        <CongratsImg />
        <p className={`${Projects.detailDescription}`}>
          By introducing a user-friendly action board, providing clear
          instructions, and tailoring actions based on the user's residency, we
          successfully streamlined participation in the political process on the
          website. This approach not only made it easy for visitors to get
          involved but also ensured that the actions presented were highly
          relevant to their individual circumstances, ultimately achieving the
          business goal of fostering seamless and impactful political
          participation.
        </p>
      </animated.div>
    </>
  );
};

export default Phase3;
