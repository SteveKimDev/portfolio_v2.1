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
            Product Designer &amp; Frontend Developer - Freelance
          </Accordion.Header>
          <Accordion.Body className={`${About.experiencesItemDescription}`}>
            <p>May 2021 - Present</p>
            <p>
              As a Freelance Product Designer and Frontend Developer, I leverage
              my expertise to effectively manage and execute web implementation
              projects, ensuring their success by aligning them with my clients'
              specific needs. My approach involves in-depth research and the
              formulation of strategic design solutions, always with a strong
              emphasis on enhancing the user experience and ensuring the
              functionality of features. This process results in the creation of
              production-ready deliverables.
            </p>
            <p>
              Throughout my career, I have achieved success across a wide
              spectrum of projects spanning various industries. I have partnered
              with commercial and marketing businesses to craft visually
              captivating and user-friendly websites, effectively promoting
              their products and services. In the realm of education, I have
              collaborated with institutions to design and develop intuitive
              platforms, enhancing the overall user experience through rigorous
              user research. Furthermore, I have joined forces with small-sized
              businesses to construct robust online platforms tailored to their
              specific requirements, ultimately helping them establish a
              formidable online presence.
            </p>
            <p>
              My extensive experience across these diverse sectors has sharpened
              my ability to adapt to varying client demands, allowing me to
              consistently deliver bespoke solutions that align with the unique
              objectives of each project.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </animated.div>
    </>
  );
};

export default ExperienceThree;
