import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../projects.module.css';

const IntroTitle = () => {
  const lettersArray = [
    'I',
    'C',
    'B',
    'C',
    'A',
    'u',
    't',
    'o',
    'I',
    'n',
    's',
    'u',
    'r',
    'a',
    'n',
    'c',
    'e',
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

  const fadeInUp16 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1700,
    config: { duration: 500 },
  });

  return (
    <div className={`${Projects.titleSection}`}>
      <div className={`${Projects.titleLine}`}>
        {/* ICBC */}
        <animated.h1 style={fadeInUp0}>{lettersArray[0]}</animated.h1>
        <animated.h1 style={fadeInUp1}>{lettersArray[1]}</animated.h1>
        <animated.h1 style={fadeInUp2}>{lettersArray[2]}</animated.h1>
        <animated.h1 style={fadeInUp3} className='space'>
          {lettersArray[3]}
        </animated.h1>
      </div>

      <div className={`${Projects.titleLine} ${Projects.titleLineMobile}`}>
        {/* Auto */}
        <animated.h1 style={fadeInUp4}>{lettersArray[4]}</animated.h1>
        <animated.h1 style={fadeInUp5}>{lettersArray[5]}</animated.h1>
        <animated.h1 style={fadeInUp6}>{lettersArray[6]}</animated.h1>
        <animated.h1 style={fadeInUp7} className='space'>
          {lettersArray[7]}
        </animated.h1>
      </div>

      <div className={`${Projects.titleLine} ${Projects.titleLineMobile}`}>
        {/* Insurance */}
        <animated.h1 style={fadeInUp8}>{lettersArray[8]}</animated.h1>
        <animated.h1 style={fadeInUp9}>{lettersArray[9]}</animated.h1>
        <animated.h1 style={fadeInUp10}>{lettersArray[10]}</animated.h1>
        <animated.h1 style={fadeInUp11}>{lettersArray[11]}</animated.h1>
        <animated.h1 style={fadeInUp12}>{lettersArray[12]}</animated.h1>
        <animated.h1 style={fadeInUp13}>{lettersArray[13]}</animated.h1>
        <animated.h1 style={fadeInUp14}>{lettersArray[14]}</animated.h1>
        <animated.h1 style={fadeInUp15}>{lettersArray[15]}</animated.h1>
        <animated.h1 style={fadeInUp16}>{lettersArray[16]}</animated.h1>
      </div>
    </div>
  );
};

export default IntroTitle;
