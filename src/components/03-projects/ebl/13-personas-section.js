import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import PersonasCopy from './14-personas-copy';
import Persona1 from './15-persona-1';
import Persona2 from './16-persona-2';

const PersonasSection = () => {
  return (
    <section>
      <Row>
        {/* title col */}
        <Col sm={{ offset: 3, span: 6 }}>
          <PersonasCopy />
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
