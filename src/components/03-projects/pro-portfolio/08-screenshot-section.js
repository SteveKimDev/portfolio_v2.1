import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import ScreenshotCopy from './09-screenshot-copy';
import HomePageImg from './media/02-img-home-page';
import AgilePageImg from './media/03-img-agile-page';
import FsdPageImg from './media/04-img-fsd-page';

const ScreenshotSection = () => {
  return (
    <section>
      <Row>
        {/* title col */}
        <Col sm={{ offset: 3, span: 6 }}>
          <ScreenshotCopy />
        </Col>

        {/* home col */}
        <Col xs={12}>
          <HomePageImg />
        </Col>

        {/* agile col */}
        <Col xs={12}>
          <AgilePageImg />
        </Col>

        {/* fsd col */}
        <Col xs={12}>
          <FsdPageImg />
        </Col>
      </Row>
    </section>
  );
};

export default ScreenshotSection;
