import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const UserFlowTitleDescription = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <div className={Projects.titleDiv}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp1}>
        <h2 className={`green-text ${Projects.contentTitle}`}>
          Content migration Startegy
        </h2>
        <p className={`mb-3 ${Projects.contentDescription}`}>
          Collaborating closely with stakeholders and our design team, we
          conducted thorough research to pinpoint key pain points hindering NUSA
          from achieving their business goals. Utilizing this insight, we
          brainstormed solutions to enhance the user experience and developed
          five distinct personas, encompassing both typical users and the new
          user types NUSA aimed to attract. Subsequently, we explored the
          optimal journey for each persona when navigating the redesigned
          website.
        </p>
        <p className={Projects.contentDescription}>
          Finally, I consolidated our research findings and decisions,
          presenting them comprehensively during an all-encompassing UX strategy
          meeting. This meeting served as a platform to outline our approach for
          website information architecture, content organization and discovery,
          as well as UI design and layouts.
        </p>
      </animated.div>
    </div>
  );
};

export default UserFlowTitleDescription;
