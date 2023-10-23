import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import IntroTitle from './02-intro-title';
import IntroCategory from './03-intro-category';
import IntroDescription from './04-intro-description';
import IntroDetails from './05-intro-details';

import * as Projects from '../projects.module.css';

const IntroSection = () => {
  return (
    <section className={`relative ${Projects.introSection}`}>
      <Row>
        {/* Title & Category */}
        <Col xs={12}>
          <IntroTitle />
          <IntroCategory />
        </Col>

        {/* Description */}
        <Col xs={12}>
          <IntroDescription />
        </Col>
      </Row>
      {/* Details */}
      <IntroDetails />
    </section>
  );
};

export default IntroSection;
