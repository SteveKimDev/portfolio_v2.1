import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import Title from './02-title';
import Project01 from './03-project1';
import Project02 from './04-project2';
import Project03 from './05-project3';
import Project04 from './06-project4';
import Project05 from './07-project5';

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
          <Project05 />
        </Col>
      </Row>

      {/* Row 3 */}
      <Row className={Home.projectRow}>
        <Col sm={12}>
          {/* FSD */}
          <Project01 />
        </Col>
      </Row>

      {/* Row 4 */}
      <Row className={Home.projectRow}>
        <Col sm={12}>
          <Project02 />
        </Col>
      </Row>

      {/* Row 5 */}
      <Row>
        <Col sm={12} className={Home.projectRow}>
          <Project03 />
        </Col>
      </Row>

      {/* Row 6 */}
      <Row>
        <Col sm={12}>
          <Project04 />
        </Col>
      </Row>
    </section>
  );
};

export default ProjectSection;
