import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import DonatePageImg from './media/08-donate-page-img';
import DonateFormImg from './media/09-donate-form-img';

import * as Projects from '../projects.module.css';

const Phase4 = () => {
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
        className={`cards ${Projects.phaseDivLast}`}
      >
        <h3 className={`accent-text ${Projects.detailTitle}`}>
          Donations Integration:
        </h3>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To enhance donations integration, we took a strategic approach to
          improve the website's functionality and user experience.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          We began by placing a highly visible donation button for easy access.
          Additionally, we designed intuitive and user-friendly donation forms
          that streamlined the contribution process, reducing friction.
        </p>
        <DonatePageImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To motivate donations, we provided comprehensive information
          highlighting the positive impact of contributions, fostering trust in
          potential donors. We also offered versatile donation options,
          including one-time and recurring donations, accommodating diverse
          preferences and financial situations.
        </p>
        <DonateFormImg />
        <p className={`${Projects.detailDescription}`}>
          By optimizing the donation process through a prominent button,
          user-friendly forms, persuasive messaging, and versatile options, we
          successfully improved donations integration, resulting in increased
          financial support for the organization.
        </p>
      </animated.div>
    </>
  );
};

export default Phase4;
