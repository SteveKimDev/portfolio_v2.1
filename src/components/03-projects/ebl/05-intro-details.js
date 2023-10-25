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
            The outdated and confusing content, combined with an inconsistent
            and non-responsive design, resulted in a negative user experience
            and hindered the success of EBL's business.
          </p>
        </animated.div>
      </Col>
      <Col sm={6} className={Projects.detailCol2}>
        <animated.div style={fadeInUp2} className='cards'>
          <h3 className={`green-text ${Projects.detailTitle}`}>Objective</h3>
          <p className={Projects.detailDescription}>
            To create a user experience that effectively engages visitors,
            conveys relevant information, and leaves a positive impression. The
            website will be optimized for maximum visibility and impact.
          </p>
        </animated.div>
      </Col>
    </Row>
  );
};

export default IntroDetails;
