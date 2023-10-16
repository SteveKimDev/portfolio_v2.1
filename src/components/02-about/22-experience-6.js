import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import Accordion from 'react-bootstrap/Accordion';

import * as About from './about.module.css';

const ExperienceSix = () => {
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
        <Accordion.Item eventKey='5' className={` ${About.experiencesItem}`}>
          <Accordion.Header className={`${About.experiencesItemTitle}`}>
            UX Designer - StitchIt Media
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>February 2017 - November 2017</p>
            <p>
              During my time at StitchIt, a collaborative video mobile app, I
              played a pivotal role in conducting market research and
              competitive analysis. This involved thoroughly studying both
              direct and indirect competitors, evaluating their strengths,
              weaknesses, and market share. I also conducted user interviews and
              collected data to generate and test potential names for the
              application. Utilizing surveys and interviews, I assessed the
              feasibility of StitchIt and its features, identifying user pain
              points and crafting personas, user stories, and a user journey
              map.
            </p>
            <p>
              Equipped with an understanding of our target audience and the
              market landscape, I defined StitchIt's value proposition, which
              laid the groundwork for the app's design. This encompassed
              developing a comprehensive user flow, storyboard, information
              architecture, and wireframe, all of which contributed to the
              creation of the MVP. To ensure its usability, the prototype
              underwent rigorous validation through usability studies, with
              subsequent design iterations based on the analysis of the results.
            </p>
            <p>
              Moreover, I took the initiative to spearhead a successful
              marketing campaign, specifically aimed at acquiring email sign-ups
              for early adopters. These early adopters played a crucial role in
              testing the StitchIt app and providing valuable feedback for
              further improvements.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceSix;
