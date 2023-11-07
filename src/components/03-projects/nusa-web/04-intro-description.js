import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const IntroDescription = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1500,
    config: { duration: 1000 },
  });
  return (
    <animated.p style={fadeInUp} className={Projects.description}>
      NumbersUSA, non-profit political organization, recognized the need for a
      significant website upgrade, encompassing a fresh redesign, enhanced
      information architecture for page navigation and hierarchy, as well as the
      intricate task of migrating content from a Drupal platform to a WordPress
      platform.
    </animated.p>
  );
};

export default IntroDescription;
