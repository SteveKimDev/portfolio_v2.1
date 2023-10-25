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
      English Book Ladder (EBL), an English language academy and library based
      in South Korea, required a website redesign to address issues such as
      inconsistent design, lack of mobile responsiveness, and confusing content.
      The redesign was necessary to support their marketing initiatives and
      showcase their English class programs effectively.
    </animated.p>
  );
};

export default IntroDescription;
