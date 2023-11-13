import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import UserFlowTitleDescription from './15-user-flow-title-description';
import UserFlow1 from './16-user-flow-1';
import UserFlow2 from './17-user-flow-2';
import UserFlow3 from './18-user-flow-3';
import UserFlow4 from './19-user-flow-4';
import UserFlow5 from './20-user-flow-5';

import * as Projects from '../projects.module.css';

const UserFlowSection = () => {
  return (
    <section>
      {/* title and description row */}
      <Row>
        {/* title col */}
        <Col sm={{ offset: 3, span: 6 }}>
          <UserFlowTitleDescription />
        </Col>
      </Row>

      {/* user flow row */}
      <Row className={Projects.userFlowRow2}>
        {/* flow 1 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow1 />
        </Col>

        {/* flow 2 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow2 />
        </Col>

        {/* flow 3 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow3 />
        </Col>

        {/* flow 4 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow4 />
        </Col>

        {/* flow 4 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow5 />
        </Col>
      </Row>
    </section>
  );
};

export default UserFlowSection;
