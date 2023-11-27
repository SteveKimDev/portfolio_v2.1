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
          <h3 className={`accent-text ${Projects.detailTitle}`}>Problem</h3>
          <p className={Projects.detailDescription}>
            For NumbersUSA, its website had an outdated design that did not
            resonate with a younger audience, confusing navigation, disorganized
            content, and an overall layout presentation that resembled a boring
            and unengaging newsfeed.
          </p>
        </animated.div>
      </Col>
      <Col sm={6} className={Projects.detailCol2}>
        <animated.div style={fadeInUp2} className='cards'>
          <h3 className={`accent-text ${Projects.detailTitle}`}>Objective</h3>
          <p className={Projects.detailDescription}>
            Modernize the website by addressing the outdated design, making it
            appealing to a younger demographic while retaining its current
            audience. Improve navigation for enhanced user experience, and
            restructure content for enhanced clarity.
          </p>
        </animated.div>
      </Col>
    </Row>
  );
};

export default IntroDetails;
