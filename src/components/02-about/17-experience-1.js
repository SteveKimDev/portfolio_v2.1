import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Accordion from 'react-bootstrap/Accordion';

import * as About from './about.module.css';

const ExperienceOne = () => {
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
        <Accordion.Item eventKey='0' className={` ${About.experiencesItem}`}>
          <Accordion.Header className={`${About.experiencesItemTitle}`}>
            UX / IA / Content Strategist - Action Digital (contract)
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>June 2023 - Present</p>
            <p>
              At Action Digital, I serve as a UX Designer, Information
              Architect, and Content Strategist, contributing to the success of
              website and mobile app projects. My key responsibilities include
              conducting extensive research to develop detailed user personas,
              crafting user journeys to enhance the overall user experience,
              steering the design approach and user flow for optimal usability,
              proposing the function specification for the mobile app news feed,
              and the mobile app gamification feature.
            </p>
            <p>
              Additionally, I play a pivotal role in the design process by
              organizing and wireframing page layouts, structuring sitemaps, and
              organizing content to facilitate seamless navigation. My expertise
              extends to developing comprehensive content strategies, ensuring
              that the website and mobile apps convey the intended message
              effectively. Moreover, I formulate content migration strategies to
              streamline the transition of existing content to new platforms,
              contributing to project efficiency and success.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceOne;
