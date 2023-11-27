import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import DiscoveryPhaseImg from './media/discovery-phase-img';

import * as Projects from '../projects.module.css';

const Phase1 = () => {
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
        <h3 className={`text-center accent-text ${Projects.detailTitle}`}>
          Discovery Phase
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Conducted a thorough audit of the legacy website, which involved
          scrutinizing not only the page hierarchy, page templates, component
          types, and media asset types but also uncovering any inconsistencies,
          or opportunities for optimization.
        </p>
        <DiscoveryPhaseImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          I conducted a comprehensive audit of the legacy website, involving a
          detailed examination of various aspects. This included a thorough
          investigation of the page hierarchy to understand the structure and
          relationships between webpages. Simultaneously, I identified and
          documented the diverse page templates and analyzed their layouts to
          understand how content was presented and structured across the site in
          accordance with ICBC's design specifications.
        </p>
        <p className={Projects.detailDescription}>
          Additionally, I assessed the range of component and media types used
          throughout the website, ensuring that each element was identified and
          reviewed for functionality and design alignment. My audit also aimed
          to identify and address any inconsistencies or discrepancies that
          could potentially hinder the website's performance or user experience.
        </p>
      </animated.div>
    </>
  );
};

export default Phase1;
