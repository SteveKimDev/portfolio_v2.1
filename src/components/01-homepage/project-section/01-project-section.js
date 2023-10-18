import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import Title from './02-title';
import Project01 from './03-project1';
import Project02 from './04-project2';

import * as Home from '../home.module.css';

const ProjectSection = () => {
  return (
    <section id='projects' className={`${Home.projectSection}`}>
      {/* Row 1 */}
      <Row className={Home.projectRow1}>
        <Col sm={12}>
          <Title />
        </Col>
      </Row>

      {/* Row 2 */}
      <Row className={Home.projectRow}>
        <Col sm={12}>
          {/* ICBC */}
          <Project01 />
        </Col>
      </Row>

      {/* Row 3 */}
      <Row className={Home.projectRow}>
        <Col sm={12}>
          {/* FSD */}
          <Project02 />
        </Col>
      </Row>

      {/* Row 4 */}
      <Row className={Home.projectRow}>
        <Col sm={12}>
          <Project01 />
        </Col>
      </Row>

      {/* Row 5 */}
      <Row>
        <Col sm={12}>
          <Project01 />
        </Col>
      </Row>
    </section>
  );
};

export default ProjectSection;
