import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import ContentMigrationPhaseImg from './media/content-migration.img';

import * as Projects from '../projects.module.css';

const Phase3 = () => {
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
      <animated.div style={fadeInUp1} className={`cards ${Projects.phaseDiv3}`}>
        <h3 className={`text-center green-text ${Projects.detailTitle}`}>
          Content Migration
        </h3>
        <p className={`text-center ${Projects.detailDescription}`}>
          Took the lead in manually migrating content that could not be
          automated. Offered guidance on necessary modifications or additions to
          Contentful content models. Made significant contributions to the UAT
          process to validate all page content and layouts.
        </p>
        <ContentMigrationPhaseImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          I led the manual content migration process, taking charge of content
          that couldn't be automated. This task required attention to detail and
          a deep understanding of the content's structure and context. By
          personally overseeing this aspect of the migration, I ensured the
          seamless transition of content, maintaining its integrity and ensuring
          it was correctly placed within the new system.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          In addition to content migration, I also played a vital role in
          shaping the content management strategy. I offered valuable insight on
          necessary modifications or additions to the Contentful content models.
          This involved identifying opportunities to optimize the content
          structure, making it more adaptable and user-friendly. My insights
          helped refine the architecture, ensuring that it aligned perfectly
          with ICBC's needs.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          In addition to content migration, I also played a vital role in
          shaping the content management strategy. I offered valuable insight on
          necessary modifications or additions to the Contentful content models.
          This involved identifying opportunities to optimize the content
          structure, making it more adaptable and user-friendly. My insights
          helped refine the architecture, ensuring that it aligned perfectly
          with ICBC's needs.
        </p>
        <p className={Projects.detailDescription}>
          Furthermore, I made significant contributions to the User Acceptance
          Testing (UAT) process, which was a critical phase in the project. By
          contributing to the process and creating a method for testing, I
          worked alongside stakeholders to validate all page content and
          layouts. This meticulous testing phase allowed us to identify any
          issues, inconsistencies, or deviations from the project's
          requirements, ensuring that the final product met the highest
          standards of quality and functionality.
        </p>
      </animated.div>
    </>
  );
};

export default Phase3;
