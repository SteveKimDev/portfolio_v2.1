import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';

import ApproachTitle from './05a-approach-title';
import Design from './06-design';
import Development from './07-development';
import Teamwork from './08-teamwork';

import * as About from './about.module.css';

const ApproachSection = () => {
  return (
    <section className={About.approachSection}>
      <ApproachTitle />
      <Row>
        <Col md={12} lg={4} className={About.approachCol1}>
          <Parallax
            translateY={['0px', '-100px']}
            className={About.approachTransform}
          >
            <Design />
          </Parallax>
        </Col>
        <Col md={12} lg={4} className={About.approachCol2}>
          <Parallax
            translateY={['0px', '-50px']}
            className={About.approachTransform}
          >
            <Development />
          </Parallax>
        </Col>
        <Col md={12} lg={4} className={About.approachCol3}>
          <Teamwork />
        </Col>
      </Row>
    </section>
  );
};

export default ApproachSection;
