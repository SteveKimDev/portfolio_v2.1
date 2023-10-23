import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const ContributionTitleDescription = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <div>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp1}>
        <h2 className={`green-text ${Projects.contentTitle}`}>
          Responsibilities and Deliverables
        </h2>
        <Row>
          <Col lg={6}>
            <ul
              className={`${Projects.contentDescription} ${Projects.contentList}`}
            >
              <li>Legacy website content audit</li>
              <li>Comprehensive sitemap</li>
              <li>Identify page templates &amp; components</li>
              <li>Strategize Contentful content modeling</li>
            </ul>
          </Col>
          <Col lg={6}>
            <ul className={Projects.contentDescription}>
              <li>Assist setting up content migration processes</li>
              <li>Stakeholder Contentful training</li>
              <li>Implemented UAT processes</li>
            </ul>
          </Col>
        </Row>
      </animated.div>
    </div>
  );
};

export default ContributionTitleDescription;
