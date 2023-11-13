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
        <h3 className={`green-text ${Projects.detailTitle}`}>
          Provide easy to find relevant content:
        </h3>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To provide easy-to-find relevant content, our approach involved
          several key strategies. First, we addressed the issues of a
          newsfeed-like experience by introducing a comprehensive content
          organization system. This system included dedicated sections for
          policy issues, possible solutions, Congress grades and comparisons,
          and action opportunities. These distinct sections allowed visitors to
          quickly identify and access the type of content they were interested
          in, eliminating the cluttered and confusing newsfeed-like experience.
        </p>
        <SitemapImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          In addition to this content organization, we focused on improving the
          website's overall user experience. We incorporated intuitive menus and
          navigation structure that facilitated seamless browsing and
          information retrieval. This ensured that users could easily navigate
          the website and locate the content they were looking for.
        </p>
        <FilterDiagramImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To further enhance content discoverability, we implemented an advanced
          search feature with filters for topics, dates, authors, and more. This
          advanced search functionality allowed visitors to refine their search
          queries and quickly locate specific information within the website's
          extensive content.
        </p>
        <FilterScreenshotImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          Furthermore, we employed tags and categories to efficiently categorize
          content. By categorizing content based on relevant topics and themes,
          we made it easier for visitors to find related resources and explore
          content that aligned with their interests.
        </p>
        <p className={`${Projects.detailDescription}`}>
          Overall, by introducing a comprehensive content organization system,
          improving navigation, enhancing search functionality, and utilizing
          tags and categories, we successfully accomplished the business goal of
          providing easy-to-find relevant content on the website. This
          user-centered approach ensured that visitors could access the
          information they needed quickly and efficiently, resulting in a more
          satisfying and productive user experience.
        </p>
      </animated.div>
    </>
  );
};

export default Phase2;
