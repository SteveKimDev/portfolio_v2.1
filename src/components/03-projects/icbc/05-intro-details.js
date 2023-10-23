import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const IntroDetails = () => {
  const fadeInUp1 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 2000,
    config: { duration: 1000 },
  });
  const fadeInUp2 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 2200,
    config: { duration: 1000 },
  });
  return (
    <Row className={Projects.detailRow}>
      <Col sm={6} className={Projects.detailCol1}>
        <animated.div style={fadeInUp1} className='cards'>
          <h3 className={`green-text ${Projects.detailTitle}`}>Problem</h3>
          <p className={Projects.detailDescription}>
            ICBC urgently needs to transition off from Sharepoint, an outdated
            platform that has reached the end of its ability to receive updates
            and support.
          </p>
        </animated.div>
      </Col>
      <Col sm={6} className={Projects.detailCol2}>
        <animated.div style={fadeInUp2} className='cards'>
          <h3 className={`green-text ${Projects.detailTitle}`}>Objective</h3>
          <p className={Projects.detailDescription}>
            Successfully migrate ICBC's extensive content from Sharepoint to
            Contentful while concurrently building a modern web platform using
            NextJS.
          </p>
        </animated.div>
      </Col>
    </Row>
  );
};

export default IntroDetails;
