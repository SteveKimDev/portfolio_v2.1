import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import { Row, Col } from 'react-bootstrap';

import TakeawayCopy from './21-takeaway-copy';

const TakeawaySection = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <section>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <Row>
        <Col sm={{ offset: 3, span: 6 }}>
          <animated.div style={fadeInUp1}>
            <TakeawayCopy />
          </animated.div>
        </Col>
      </Row>
    </section>
  );
};

export default TakeawaySection;
