import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import * as Home from '../home.module.css';
import Title from './02-title';

const ProjectSection = () => {
  return (
    <section id='projects' className={`realtive ${Home.projectSection}`}>
      {/* Row 1 */}
      <Row>
        <Col sm={12}>
          <Title />
        </Col>
      </Row>
    </section>
  );
};

export default ProjectSection;
