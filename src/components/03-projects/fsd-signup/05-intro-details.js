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
        <animated.div style={fadeInUp1} className={Projects.card}>
          <h3 className={`green-text ${Projects.detailTitle}`}>Problem</h3>
          <p className={Projects.detailDescription}>
            To streamline the subscription process for new clients, a simpler
            sign-up method was needed as direct email or phone calls were
            delaying onboarding.
          </p>
        </animated.div>
      </Col>
      <Col sm={6} className={Projects.detailCol2}>
        <animated.div style={fadeInUp2} className={Projects.card}>
          <h3 className={`green-text ${Projects.detailTitle}`}>Objective</h3>
          <p className={Projects.detailDescription}>
            Create a digital sign-up process that enables new clients to input
            their business information before the consultation call,
            streamlining the onboarding experience.
          </p>
        </animated.div>
      </Col>
    </Row>
  );
};

export default IntroDetails;
