import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import IntroTitle from './02-intro-title';
import IntroDescription from './03-intro-description';
import AboutImg from './04-about-img';

import * as About from './about.module.css';

const IntroSection = () => {
  return (
    <section className={About.introSection}>
      <Row>
        <Col sm={7}>
          <IntroTitle />
          <IntroDescription />
        </Col>
        <Col sm={5}>
          <AboutImg />
        </Col>
      </Row>
    </section>
  );
};

export default IntroSection;
