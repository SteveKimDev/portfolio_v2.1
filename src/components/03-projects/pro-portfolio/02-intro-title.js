import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const IntroTitle = () => {
  const lettersArray = [
    'N',
    'a',
    't',
    'a',
    'l',
    'i',
    'e',
    'C',
    'e',
    'r',
    'v',
    'a',
    'n',
    't',
    'e',
    's',
  ];

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

  const fadeInUp9 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1000,
    config: { duration: 500 },
  });

  const fadeInUp10 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1100,
    config: { duration: 500 },
  });

  const fadeInUp11 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1200,
    config: { duration: 500 },
  });

  const fadeInUp12 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1300,
    config: { duration: 500 },
  });

  const fadeInUp13 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1400,
    config: { duration: 500 },
  });

  const fadeInUp14 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1500,
    config: { duration: 500 },
  });

  const fadeInUp15 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1600,
    config: { duration: 500 },
  });

  return (
    <div className={`${Projects.titleSection}`}>
      <div className={`${Projects.titleLine}`}>
        {/* Natalie */}
        <animated.h1 style={fadeInUp0} className={Projects.titleLettersMobile}>
          {lettersArray[0]}
        </animated.h1>
        <animated.h1 style={fadeInUp1} className={Projects.titleLettersMobile}>
          {lettersArray[1]}
        </animated.h1>
        <animated.h1 style={fadeInUp2} className={Projects.titleLettersMobile}>
          {lettersArray[2]}
        </animated.h1>
        <animated.h1 style={fadeInUp3} className={Projects.titleLettersMobile}>
          {lettersArray[3]}
        </animated.h1>
        <animated.h1 style={fadeInUp4} className={Projects.titleLettersMobile}>
          {lettersArray[4]}
        </animated.h1>
        <animated.h1 style={fadeInUp5} className={Projects.titleLettersMobile}>
          {lettersArray[5]}
        </animated.h1>
        <animated.h1
          style={fadeInUp6}
          className={`space ${Projects.titleLettersMobile}`}
        >
          {lettersArray[6]}
        </animated.h1>
      </div>

      <div className={`${Projects.titleLine}`}>
        {/* Cervantes */}
        <animated.h1 style={fadeInUp7} className={Projects.titleLettersMobile}>
          {lettersArray[7]}
        </animated.h1>
        <animated.h1 style={fadeInUp8} className={Projects.titleLettersMobile}>
          {lettersArray[8]}
        </animated.h1>
        <animated.h1 style={fadeInUp9} className={Projects.titleLettersMobile}>
          {lettersArray[9]}
        </animated.h1>
        <animated.h1 style={fadeInUp10} className={Projects.titleLettersMobile}>
          {lettersArray[10]}
        </animated.h1>
        <animated.h1 style={fadeInUp11} className={Projects.titleLettersMobile}>
          {lettersArray[11]}
        </animated.h1>
        <animated.h1 style={fadeInUp12} className={Projects.titleLettersMobile}>
          {lettersArray[12]}
        </animated.h1>
        <animated.h1 style={fadeInUp13} className={Projects.titleLettersMobile}>
          {lettersArray[13]}
        </animated.h1>
        <animated.h1 style={fadeInUp14} className={Projects.titleLettersMobile}>
          {lettersArray[14]}
        </animated.h1>
        <animated.h1 style={fadeInUp15} className={Projects.titleLettersMobile}>
          {lettersArray[15]}
        </animated.h1>
      </div>
    </div>
  );
};

export default IntroTitle;
