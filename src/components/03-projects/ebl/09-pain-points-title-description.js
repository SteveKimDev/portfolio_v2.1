import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const PainPointTitleDescription = () => {
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
        <h2 className={`accent-text ${Projects.contentTitle}`}>
          Our users frustrations and pain points
        </h2>
        <p className={Projects.contentDescription}>
          Following a thorough research process that involved several weeks of
          data gathering, user interviews, and analysis, three common pain
          points and frustrations were identified among the majority of users
          who visited the old website. These insights served as a foundation for
          the website redesign and development project, helping to guide the
          design process and ensure that the new site addresses the needs and
          concerns of the target audience.
        </p>
      </animated.div>
    </div>
  );
};

export default PainPointTitleDescription;
