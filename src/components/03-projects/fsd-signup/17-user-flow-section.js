import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import UserFlowTitleDescription from './18-user-flow-title-description';
import UserFlow1 from './19-user-flow-1';
import UserFlow2 from './20-user-flow-2';
import UserFlow3 from './21-user-flow-3';
import UserFlow4 from './22-user-flow-4';
import UserFlow5 from './23-user-flow-5';
import UserFlow6 from './24-user-flow-6';
import UserFlow7 from './27-user-flow-7';
import UserFlow8 from './28-user-flow-8';

import ScreenshotImg01 from './media/03-img-screenshot';
import ScreenshotImg02 from './media/04-img-screenshot';
import ScreenshotImg03 from './media/05-img-screenshot';
import ScreenshotImg04 from './media/06-img-screenshot';
import ScreenshotImg05 from './media/07-img-screenshot';
import ScreenshotImg06 from './media/08-img-screenshot';
import ScreenshotImg07 from './media/09-img-screenshot';
import ScreenshotImg08 from './media/10-img-screenshot';

import * as Projects from '../projects.module.css';

const PersonasSection = () => {
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

        {/* flow 5 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow5 />
        </Col>

        {/* flow 6 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow6 />
        </Col>

        {/* flow 7 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow7 />
        </Col>

        {/* flow 8 */}
        <Col sm={12} md={6} lg={3}>
          <UserFlow8 />
        </Col>
      </Row>

      {/* screen image row */}
      <Row>
        {/* screenshot img 01 */}
        <Col xs={12}>
          <ScreenshotImg01 />
        </Col>

        {/* screenshot img 02 */}
        <Col xs={12}>
          <ScreenshotImg02 />
        </Col>

        {/* screenshot img 03 */}
        <Col xs={12}>
          <ScreenshotImg03 />
        </Col>

        {/* screenshot img 04 */}
        <Col xs={12}>
          <ScreenshotImg04 />
        </Col>

        {/* screenshot img 05 */}
        <Col xs={12}>
          <ScreenshotImg05 />
        </Col>

        {/* screenshot img 06 */}
        <Col xs={12}>
          <ScreenshotImg06 />
        </Col>

        {/* screenshot img 07 */}
        <Col xs={12}>
          <ScreenshotImg07 />
        </Col>

        {/* screenshot img 08 */}
        <Col xs={12}>
          <ScreenshotImg08 />
        </Col>
      </Row>
    </section>
  );
};

export default PersonasSection;
