import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import ContentMigrationTitleDescription from './15-content-migration-title-description';
import ContentMigrationImgCard from './16-content-migration-img';

// import * as Projects from '../projects.module.css';

const ContentMigration = () => {
  return (
    <section>
      {/* title and description row */}
      <Row>
        {/* title col */}
        <Col sm={{ offset: 3, span: 6 }}>
          <ContentMigrationTitleDescription />
        </Col>
        <Col sm={12}>
          <ContentMigrationImgCard />
        </Col>
      </Row>
    </section>
  );
};

export default ContentMigration;
