import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import VideoHomePage from './media/01-vid-home-page';
import ContributionTitleDescription from './07-contribution-title-description';

// import * as Projects from '../projects.module.css';

const ContributionSection = () => {
  return (
    <section>
      <Row>
        {/* home vid col */}
        <Col xs={12}>
          <VideoHomePage />
        </Col>

        {/* title & description */}
        <Col sm={{ offset: 3, span: 6 }}>
          <ContributionTitleDescription />
        </Col>
      </Row>
    </section>
  );
};

export default ContributionSection;
