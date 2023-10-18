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
            Need to streamline the subscription process for new clients due to
            the existing delays caused by relying on direct email or phone calls
            for onboarding.
          </p>
        </animated.div>
      </Col>
      <Col sm={6} className={Projects.detailCol2}>
        <animated.div style={fadeInUp2} className='cards'>
          <h3 className={`green-text ${Projects.detailTitle}`}>Objective</h3>
          <p className={Projects.detailDescription}>
            Design and develop a digital sign-up process that allows new clients
            to input their business information prior to the consultation call.
          </p>
        </animated.div>
      </Col>
    </Row>
  );
};

export default IntroDetails;
