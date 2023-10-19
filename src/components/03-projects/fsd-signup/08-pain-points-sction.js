import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import PaingPointsTitleDescription from './09-pain-points-title-description';
import PainPoint1 from './10-pain-point-1';
import PainPoint2 from './11-pain-point-2';
import PainPoint3 from './12-pain-point-3';

const PaintPointsSection = () => {
  return (
    <section>
      <Row>
        <Col sm={{ offset: 3, span: 6 }}>
          <PaingPointsTitleDescription />
        </Col>
        <Col lg={4}>
          <PainPoint1 />
        </Col>
        <Col lg={4}>
          <PainPoint2 />
        </Col>
        <Col lg={4}>
          <PainPoint3 />
        </Col>
      </Row>
    </section>
  );
};

export default PaintPointsSection;
