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
      In response to the existing inefficiencies in their SaaS subscription
      product's onboarding process, First String Digital recognized the
      imperative need for a comprehensive redesign. This endeavor aimed to
      streamline the onboarding experience, leading to a significant increase in
      efficiency and a notable decrease in the signup drop-off rate.
    </animated.p>
  );
};

export default IntroDescription;
