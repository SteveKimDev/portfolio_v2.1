import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const IntroCategory = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1000,
    config: { duration: 1000 },
  });
  return (
    <animated.p style={fadeInUp} className={Projects.category}>
      Product Design &amp; Development (2020)
    </animated.p>
  );
};

export default IntroCategory;
