import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import HeroTitle from './02-title';
import Subtitle from './03-subtitle';
import HeroImg from './04-hero-img';
import Description from './05-description';

import * as Home from '../home.module.css';

const HeroSection = () => {
  return (
    <section className={`relative ${Home.heroSection}`}>
      <Row>
        <Col sm={7} xs={12}>
          <HeroTitle />
          <Subtitle />
        </Col>
        <Col sm={5} xs={12}>
          <HeroImg />
        </Col>
        <Col lg={{ offset: 3, span: 9 }} md={12}>
          <Description />
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
