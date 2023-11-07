import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

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
      <animated.div style={fadeInUp1} className={`cards ${Projects.phaseDiv}`}>
        <h3 className={`green-text ${Projects.detailTitle}`}>
          Provide easy to find relevant content:
        </h3>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To address the issues of a newsfeed-like experience and subpar website
          design, we will introduce a comprehensive content organization system
          with dedicated sections for news articles, policy analysis, Congress
          grades and comparisons, and action opportunities. The redesign will
          incorporate intuitive menus and navigation to facilitate seamless
          browsing and information retrieval.
        </p>
        <p className={`${Projects.detailDescription}`}>
          Additionally, we will enhance content discoverability by improving the
          website's search functionality, implementing an advanced search
          feature complete with filters for topics, dates, authors, and more.
          Furthermore, we will employ tags and categories to efficiently
          categorize content, aiding visitors in finding related resources.
        </p>
      </animated.div>
    </>
  );
};

export default Phase2;
