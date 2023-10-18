import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import ContributionTitleDescription from './07-contribution-title-description';

import * as Projects from '../projects.module.css';

const ContributionSection = () => {
  return (
    <section className={Projects.section}>
      <Row>
        {/* title & description */}
        <Col sm={{ offset: 3, span: 6 }}>
          <ContributionTitleDescription />
        </Col>
      </Row>
    </section>
  );
};

export default ContributionSection;
