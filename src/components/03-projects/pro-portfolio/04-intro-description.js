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
      The website is a professional portfolio for Natalie, a Technical Project
      Manager, that showcases her professional experiences and project
      portfolio. The website has a modern and minimal design, with a focus on
      the content, and uses parallax animation for visual interest. Visitors to
      the site will be able to learn about Natalie's background and skills, see
      examples of her work, and learn about the companies she has worked with in
      the past.
    </animated.p>
  );
};

export default IntroDescription;
