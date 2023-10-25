import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import LargeVideo from './media/01-vid-home-page';
import ContributionTitleDescription from './07-contribution-title-description';

// import * as Projects from '../projects.module.css';

const ContributionSection = () => {
  return (
    <section>
      <Row>
        {/* home vid col */}
        <Col xs={12}>
          <LargeVideo />
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
