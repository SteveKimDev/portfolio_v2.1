import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const IntroDescription = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, translateY: '20px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1000,
    config: { duration: 500 },
  });
  return (
    <>
      <animated.p style={fadeInUp} className={About.introDescription}>
        My journey to Product Designer started while I was a frontend developer.
        It was during that time I became increasingly interested and focused on
        user-centered approach to design/development. After two years of
        straddling roles as both a developer and a designer, I made a decision
        to solely focus on Product Design. Today, I find immense satisfaction
        when my efforts and years of experience contributes to crafting a web
        application that is beautiful, intuitive, and functional.
      </animated.p>
    </>
  );
};

export default IntroDescription;
