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
            Senior Product Designer at Lemonlight (contract)
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>Aug 2022 - Nov 2022</p>
            <p>
              Lemonlight is an on-demand video production company that
              specializes in performance creative for brands and agencies across
              the globe.
            </p>
            <ul>
              <li>
                Closely collaborated with the Director of Product Management
                exploring and ideating the design direction for their new
                two-sided marketplace workflow management platform.
              </li>
              <li>
                Contributed to the architecture of the user’s journey to ensure
                all business requirements were met.
              </li>
              <li>
                Solved design obstacles to create a positive user experience,
                while applying industry best practices.
              </li>
              <li>
                In the fast-paced startup environment, I quickly adapted and
                executed design changes when needed. By being highly organized
                and prioritizing numerous concurrent tasks.
              </li>
              <li>
                Presented my findings and design options to the Director of
                Product Management and Lemonlight’s product team.
              </li>
              <li>
                Other responsibilities included translating wireframes into
                high-fidelity designs. Prototyping and testing design options,
                then iterating on the designs when needed.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceOne;
