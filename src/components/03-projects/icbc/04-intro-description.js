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
      ICBC, a prominent auto insurance company serving the entire Vancouver,
      British Columbia, Canada region, implemented an extensive content
      migration and web development project. The project aimed to transition
      from an outdated Sharepoint website and content management system to a
      contemporary, scalable web platform built using NextJS and Contentful, a
      headless content management platform.
    </animated.p>
  );
};

export default IntroDescription;
