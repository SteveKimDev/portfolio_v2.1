import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Accordion from 'react-bootstrap/Accordion';

import * as About from './about.module.css';

const ExperienceThree = () => {
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
        <Accordion.Item eventKey='2' className={`${About.experiencesItem}`}>
          <Accordion.Header className={`${About.experiencesItemTitle}`}>
            Product Designer &amp; FE Developer at First String Digital
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>Jan 2018 - May 2021</p>
            <p>
              First String Digital is a web design agency focused on helping
              small businesses achieve their goals through thoughtful design,
              modern technologies, and effective brand strategy. I specialized
              in all design concepts and code development for the website
              projects from inception to release.
            </p>
            <ul>
              <li>
                Performed full content review of the client’s existing website.
              </li>
              <li>
                Quickly learned about the client’s goals, challenges, brand
                position, and target audience by utilizing the sprint design
                paradigm.
              </li>
              <li>
                Developed a strong content and brand strategy to use as a
                guidepost for the design and development implementation.
              </li>
              <li>
                Utilized a mobile-first design strategy, designing all the
                websites with clean, easy to navigate workflows that excel on
                all device profiles.
              </li>
              <li>
                Developed the websites using modern Jamstack architecture with
                GatsbyJS, React, GraphQL, Netlify, and Contentful headless CMS.
              </li>
              <li>
                Developed website architecture integrating APIs for e-commerce,
                user authentication, headless CMS, Digital Asset Management, and
                localization/ translation services increasing the overall value
                of the system.
              </li>
              <li>
                Devised and created the content strategy & content model for the
                website based on business goals and objectives. This directly
                contributed to increasing user engagement and client sign-ups by
                50%.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceThree;
