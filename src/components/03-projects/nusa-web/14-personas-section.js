import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import PersonasTitleDescription from './15-personas-title-description';
import Persona1 from './16-persona-1';
import Persona2 from './17-persona-2';

const PersonasSection = () => {
  return (
    <section>
      <Row>
        {/* title col */}
        <Col sm={{ offset: 3, span: 6 }}>
          <PersonasTitleDescription />
        </Col>

        {/* persona 1 */}
        <Col lg={6}>
          <Persona1 />
        </Col>

        {/* persona 2 */}
        <Col lg={6}>
          <Persona2 />
        </Col>
      </Row>
    </section>
  );
};

export default PersonasSection;
