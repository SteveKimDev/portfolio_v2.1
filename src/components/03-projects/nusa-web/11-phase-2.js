import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import SitemapImg from './media/02-sitemap-img';
import FilterDiagramImg from './media/03-filter-diagram-img';
import FilterScreenshotImg from './media/04-filter-screenshot-img';

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
        <h3 className={`accent-text ${Projects.detailTitle}`}>
          Provide easy to find relevant content:
        </h3>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To ensure easy access to relevant content, we took a multifaceted
          approach. Firstly, we tackled the newsfeed-like experience by
          implementing a comprehensive content organization system. This system
          featured dedicated sections for policy issues, potential solutions,
          Congress grades and comparisons, and action opportunities,
          streamlining content discovery.
        </p>
        <SitemapImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          We also focused on enhancing the overall user experience by
          introducing intuitive menus and navigation structures that facilitated
          seamless browsing and information retrieval, ensuring visitors could
          effortlessly find desired content.
        </p>
        <FilterDiagramImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To further boost content discoverability, we introduced an advanced
          search feature with filters for topics, dates, authors, and more. This
          feature allowed users to quickly pinpoint specific information within
          the website's extensive content.
        </p>
        <FilterScreenshotImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          Furthermore, we employed tags and categories to efficiently categorize
          content based on relevant topics and themes, simplifying the process
          of finding related resources.
        </p>
        <p className={`${Projects.detailDescription}`}>
          Overall, our user-centered approach, including comprehensive content
          organization, improved navigation, enhanced search functionality, and
          effective use of tags and categories, successfully achieved the
          business goal of providing easily accessible and relevant content on
          the website. This approach ensured a more satisfying and efficient
          user experience for visitors.
        </p>
      </animated.div>
    </>
  );
};

export default Phase2;
