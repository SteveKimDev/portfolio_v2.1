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
            UX/UI Designer at StitchIt Media
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>Feb 2017 - Nov 2017</p>
            <p>
              StitchIt Media was a collaborative mobile video application that
              aimed to emphasize the fun and social connection of creating and
              sharing videos. StitchIt provided users with an easy and intuitive
              experience creating 10 second videos to append their video clips
              with one button interaction. The platform seamlessly edited and
              combined videos into one action shot, complete with transitions,
              and the ability to add emojis, filters, music and AR themes.
            </p>
            <ul>
              <li>
                Researched direct and indirect competitors to uncover advantages
                and disadvantages, and determine market share and viability.
              </li>
              <li>
                Brainstormed and tested the application name by conducting
                interviews and gathering data.
              </li>
              <li>
                Researched viability of the StitchIt application and its
                features through interviews and surveys.
              </li>
              <li>
                Identified pain points, created personas, user stories, and user
                journey map.
              </li>
              <li>
                Defined StitchIt app’s value proposition, based on the research
                and data-gathering.
              </li>
              <li>
                Ideated the design with a comprehensive user flow, storyboard,
                information architecture, and wireframe.
              </li>
              <li>
                Designed and assisted in building an MVP and validated the
                prototype through usability studies.
              </li>
              <li>
                Iterated on the design based on results analysis from usability
                studies.
              </li>
              <li>
                Spearheaded a marketing campaign to obtain email sign-ups for
                first adopters to use and test the StitchIt application.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceFour;
