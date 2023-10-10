import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';

import TestimonialTitle from './10-testimonial-title';
import Testmonials1 from './11-testimonial-1';
import Testmonials2 from './12-testimonial-2';
import Testmonials3 from './13-testimonial-3';

import * as About from './about.module.css';

const TestimonialSection = () => {
  return (
    <section className={About.testimonialSection}>
      <TestimonialTitle />
      <Row>
        <Col md={12} lg={4} className={About.approachCol1}>
          <Parallax
            translateY={['0px', '-100px']}
            className={About.testimonialTransform}
          >
            <Testmonials2 />
          </Parallax>
        </Col>
        <Col md={12} lg={4} className={About.approachCol2}>
          <Parallax
            translateY={['0px', '-50px']}
            className={About.testimonialTransform}
          >
            <Testmonials3 />
          </Parallax>
        </Col>
        <Col md={12} lg={4} className={About.approachCol3}>
          <Testmonials1 />
        </Col>
      </Row>
    </section>
  );
};

export default TestimonialSection;
