import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as About from './about.module.css';

const IntroTitle = () => {
  const title = ['M', 'y', 'J', 'o', 'u', 'r', 'n', 'e', 'y'];

  const fadeInUp0 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 100,
    config: { duration: 500 },
  });

  const fadeInUp1 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 200,
    config: { duration: 500 },
  });

  const fadeInUp2 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 300,
    config: { duration: 500 },
  });

  const fadeInUp3 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 400,
    config: { duration: 500 },
  });

  const fadeInUp4 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 500,
    config: { duration: 500 },
  });

  const fadeInUp5 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 600,
    config: { duration: 500 },
  });

  const fadeInUp6 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 700,
    config: { duration: 500 },
  });

  const fadeInUp7 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 800,
    config: { duration: 500 },
  });

  const fadeInUp8 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 900,
    config: { duration: 500 },
  });

  return (
    <>
      {/* Line 1 */}
      <div className={About.titleLine}>
        {/* My */}
        <animated.h1 style={fadeInUp0}>{title[0]}</animated.h1>
        <animated.h1 style={fadeInUp1} className='space'>
          {title[1]}
        </animated.h1>

        {/* Journey*/}
        <animated.h1 style={fadeInUp2}>{title[2]}</animated.h1>
        <animated.h1 style={fadeInUp3}>{title[3]}</animated.h1>
        <animated.h1 style={fadeInUp4}>{title[4]}</animated.h1>
        <animated.h1 style={fadeInUp5}>{title[5]}</animated.h1>
        <animated.h1 style={fadeInUp6}>{title[6]}</animated.h1>
        <animated.h1 style={fadeInUp7}>{title[7]}</animated.h1>
        <animated.h1 style={fadeInUp8}>{title[8]}</animated.h1>
      </div>
    </>
  );
};

export default IntroTitle;
