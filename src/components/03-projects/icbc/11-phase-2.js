import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import DefinitionPhaseImg from './media/definition-phase-img';

import * as Projects from '../projects.module.css';

const Phase2 = () => {
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
        className={`cards align-center ${Projects.phaseDiv2}`}
      >
        <h3 className={`text-center green-text ${Projects.detailTitle}`}>
          Defintion Phase
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Created a detailed sitemap, defined page templates, tracked sunsetted
          pages and media assets, made needed template and component redesigns,
          and contributed to Contentful CMS content model development.
        </p>
        <DefinitionPhaseImg />
      </animated.div>
    </>
  );
};

export default Phase2;
