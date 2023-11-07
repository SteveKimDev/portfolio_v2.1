import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import DefinitionPhaseImg from './media/definition-phase-img';

import * as Projects from '../projects.module.css';

const Phase2 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 100,
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
      <animated.div style={fadeInUp1} className={`cards ${Projects.phaseDiv}`}>
        <h3 className={`text-center green-text ${Projects.detailTitle}`}>
          Defintion Phase
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Created a detailed sitemap, defined page templates, tracked sunsetted
          pages and media assets, made needed template and component redesigns,
          and contributed to Contentful CMS content model development.
        </p>
        <DefinitionPhaseImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          I began by crafting a detailed sitemap, which served as the backbone
          of our website structure. This sitemap not only helped us gain a clear
          understanding of the website's layout but also ensured a logical and
          user-friendly navigation experience for visitors.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          In the Definition phase, I defined page templates that were crucial
          for consistency and efficiency in content presentation. These
          templates provided a framework for our development team to work
          within, streamlining the development process and maintaining a
          cohesive visual identity across the website.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          One of the challenges we faced was dealing with sunsetted pages and
          media assets. To address this, I diligently tracked these outdated or
          redundant elements, ensuring that they were appropriately retired to
          prevent clutter and confusion for the upcoming content migration.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          Recognizing the need for improvements, I played a crucial role in
          template and component redesigns. These redesigns were instrumental in
          enhancing the website's visual appeal, usability, and overall user
          experience. The Stakeholders and I worked collaboratively to ensure
          that each element was aligned with ICBC's design specifications and
          best practices.
        </p>
        <p className={`${Projects.detailDescription}`}>
          Furthermore, I contributed to the development of Contentful CMS
          content models. This involved shaping the architecture that would
          house our content, making it easier to manage, update, and scale in
          the future. By actively participating in content model development, I
          helped create a robust framework that aligned perfectly with the
          project's goals.
        </p>
      </animated.div>
    </>
  );
};

export default Phase2;
