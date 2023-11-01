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
          <h3 className={`green-text ${Projects.detailTitle}`}>Objective</h3>
          <p className={Projects.detailDescription}>
            To showcase Natalie's extensive experience and selected projects as
            a Technical Project Manager, with a simple and intuitive layout that
            makes navigation easy for visitors. The focus was on highlighting
            Natalie's work, emphasizing the content and showcasing her skills
            and achievements.
          </p>
        </animated.div>
      </Col>
      <Col sm={6} className={Projects.detailCol2}>
        <animated.div style={fadeInUp2} className='cards'>
          <h3 className={`green-text ${Projects.detailTitle}`}>Result</h3>
          <p className={Projects.detailDescription}>
            To attract the attention of potential employers by presenting
            Natalie's personal brand and professional accomplishments in a fresh
            and modern way. The aim was to create an online presence that
            effectively showcases her skills, experiences, and personality to
            engage potential employers.
          </p>
        </animated.div>
      </Col>
    </Row>
  );
};

export default IntroDetails;
