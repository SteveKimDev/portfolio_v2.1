import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Accordion from 'react-bootstrap/Accordion';

import * as About from './about.module.css';

const ExperienceFive = () => {
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
        <Accordion.Item eventKey='4' className={` ${About.experiencesItem}`}>
          <Accordion.Header className={`${About.experiencesItemTitle}`}>
            FE Developer at Nomad Software Consulting
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>Jan 2015 - Feb 2017</p>
            <p>
              Nomad Software Consulting is a web agency focused on helping small
              to medium sized businesses to increase their website's online
              presence, branding, and social media marketing strategies.
            </p>
            <ul>
              <li>
                Maintained coding standards and expectations for the web
                building team.
              </li>
              <li>
                Applied HTML, CSS, Javascript to applications with an emphasis
                on cross-browser compatibility.
              </li>
              <li>
                Converted Photoshop or Illustrator designs into functional web
                pages.
              </li>
              <li>Created graphics and optimized them for the web.</li>
              <li>
                Added and modified Javascript code to pages for increased
                functionality.
              </li>
              <li>
                Provided technical coding support, and site maintenance for
                customers.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceFive;
