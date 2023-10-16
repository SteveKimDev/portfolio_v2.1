import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Accordion from 'react-bootstrap/Accordion';

import * as About from './about.module.css';

const ExperienceFour = () => {
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
        <Accordion.Item eventKey='3' className={` ${About.experiencesItem}`}>
          <Accordion.Header className={`${About.experiencesItemTitle}`}>
            Senior Product Designer - Lemonlight (contract)
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>August 2022 - November 2022 </p>
            <p>
              As a Senior Product Designer at Lemonlight, I successfully led
              design initiatives for the company's project management platform.
              Working closely with the Director of Product Management, I played
              a key role in exploring and ideating the design direction for
              Lemonlight's innovative two-sided marketplace project management
              platform. I contributed to the architecture of the user's journey,
              ensuring seamless alignment with all business requirements. By
              focusing on solving design obstacles, I consistently crafted
              positive user experiences and implemented industry best practices.
            </p>
            <p>
              Thriving in a fast-paced startup environment, I demonstrated
              exceptional adaptability, swiftly executing design changes and
              efficiently managing multiple concurrent tasks through meticulous
              organization and prioritization. I effectively communicated my
              findings and design options to key stakeholders, including the
              Director of Product Management and Lemonlight's product team.
            </p>
            <p>
              Moreover, I excelled in translating wireframes into high-fidelity
              designs, conducting rigorous prototyping and testing, and
              iterating designs to deliver exceptional results. I ensured a
              seamless hand-off to the development team for implementation.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceFour;
