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
            Product Designer &amp; Frontend Developer - First String Digtial
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>January 2018 - May 2021</p>
            <p>
              During my time at First String Digital, a web design agency
              focused on the restaurant industry, I assumed a leadership role in
              spearheading the design efforts for several critical components of
              the company's offerings. Notably, I played a pivotal role in the
              enhancement and refinement of First String Digital's website
              templates, the development of a customer dashboard platform, and
              the design and optimization of the user sign-up process.
            </p>
            <p>
              Working closely and collaboratively with the development team, I
              contributed significantly to the design and implementation of
              content models within the Contentful CMS platform. The content
              models were strategically crafted to seamlessly integrate with the
              customer platform and the website templates, ensuring a cohesive
              and efficient user experience across all facets of our digital
              solutions.
            </p>
            <p>
              My involvement in these initiatives not only underscored my
              proficiency in design but also highlighted my ability to synergize
              with cross-functional teams to align design principles with
              technical feasibility. This collaborative approach ultimately
              resulted in the successful development and delivery of
              user-friendly, visually appealing, and highly functional digital
              solutions tailored to each client’s unique needs.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceFive;
