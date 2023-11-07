import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import PhaseTitleDescription from './09-phase-title-description';
import Phase1 from './10-phase-1';
import Phase2 from './11-phase-2';
import Phase3 from './12-phase-3';
import Phase4 from './13-phase-4';

const PhaseSection = () => {
  return (
    <section>
      <Row>
        <Col sm={{ offset: 3, span: 6 }}>
          <PhaseTitleDescription />
        </Col>
        <Col sm={12}>
          <Phase1 />
        </Col>
        <Col sm={12}>
          <Phase2 />
        </Col>
        <Col sm={12}>
          <Phase3 />
        </Col>
        <Col sm={12}>
          <Phase4 />
        </Col>
      </Row>
    </section>
  );
};

export default PhaseSection;
