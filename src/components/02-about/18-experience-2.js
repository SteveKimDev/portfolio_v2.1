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
            Product Designer &amp; FE Developer (freelance)
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>May 2021 - Present</p>
            <p>
              As a freelance Product Designer and Front End Developer, I
              currently work with clients to help run and manage their web
              implementation projects from inception to release.
            </p>
            <ul>
              <li>
                Partner with client stakeholders to uncover, define, and address
                unmet user and business needs.
              </li>
              <li>
                Research and report on user journeys to uncover pain points.
              </li>
              <li>
                Communicate design strategies and reasoning with client
                stakeholders.
              </li>
              <li>
                Create wireframes, prototypes, and high-fidelity comps to
                communicate design ideas and illustrate user interaction
              </li>
              <li>
                Collaborating with development leads creating buildable
                solutions within technological restraints
              </li>
              <li>Facilitate user interviews and remote user testing.</li>
              <li>
                UX writing for best copy to accelerate successful interaction
                and brand direction.
              </li>
              <li>Design production-ready deliverables.</li>
              <li>
                Use browser developer tools to fine-tune user interface
                elements.
              </li>
              <li>
                QA of development work to assure visual and functional quality.
              </li>
              <li>
                Create data-driven design artifacts (user journeys, personas,
                storyboards).
              </li>
              <li>
                Applies visual design to functional website applications built
                in React and Jamstack architecture.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceTwo;
