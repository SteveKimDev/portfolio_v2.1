import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Accordion from 'react-bootstrap/Accordion';

import * as About from './about.module.css';

const ExperienceTwo = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // fade animation
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
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
      <animated.div style={fadeInUp1}>
        <Accordion.Item eventKey='1' className={` ${About.experiencesItem}`}>
          <Accordion.Header className={`${About.experiencesItemTitle}`}>
            Information Architect - Power Shifter (contract)
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>February 2023 - September 2023</p>
            <p>
              As an Information Architect for Power Shifter, I played a vital
              part implementing the comprehensive content migration and web
              development project for ICBC, a prominent auto insurance company
              serving Vancouver, B.C., Canada. My responsibilities involved
              auditing the legacy website, creating a comprehensive sitemap, and
              identifying page templates, components, and vital assets. I
              collaborated closely with our development team to strategize
              content modeling within the Contentful CMS, and actively involved
              in the content migration process.
            </p>
            <p>
              Furthermore, I also conducted stakeholder training in Contentful,
              equipping their team with the knowledge they needed to make the
              most of the new system. I also played a key role in implementing
              the User Acceptance Testing (UAT) process, ensuring that the
              project met the highest quality standards.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceTwo;
