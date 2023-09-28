import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as Home from '../home.module.css';

const HeroTitle = () => {
  const title = [
    'A',
    'P',
    'r',
    'o',
    'd',
    'u',
    'c',
    't',
    'D',
    'e',
    's',
    'i',
    'g',
    'n',
    'e',
    'r',
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
    delay: 100,
    config: { duration: 500 },
  });

  const fadeInUp9 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 200,
    config: { duration: 500 },
  });

  const fadeInUp10 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 300,
    config: { duration: 500 },
  });

  const fadeInUp11 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 400,
    config: { duration: 500 },
  });

  const fadeInUp12 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 500,
    config: { duration: 500 },
  });

  const fadeInUp13 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 600,
    config: { duration: 500 },
  });

  const fadeInUp14 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 700,
    config: { duration: 500 },
  });

  const fadeInUp15 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 800,
    config: { duration: 500 },
  });

  return (
    <>
      {/* Line 1 */}
      <div className={Home.titleLine}>
        {/* A */}
        <animated.h1 style={fadeInUp0} className={Home.space}>
          {title[0]}
        </animated.h1>

        {/* Creative */}
        <animated.h1 style={fadeInUp1}>{title[1]}</animated.h1>
        <animated.h1 style={fadeInUp2}>{title[2]}</animated.h1>
        <animated.h1 style={fadeInUp3}>{title[3]}</animated.h1>
        <animated.h1 style={fadeInUp4}>{title[4]}</animated.h1>
        <animated.h1 style={fadeInUp5}>{title[5]}</animated.h1>
        <animated.h1 style={fadeInUp6}>{title[6]}</animated.h1>
        <animated.h1 style={fadeInUp7}>{title[7]}</animated.h1>
      </div>

      {/* Line 2 */}
      <div className={Home.titleLine}>
        {/* Designer */}
        <animated.h1 style={fadeInUp8}>{title[8]}</animated.h1>
        <animated.h1 style={fadeInUp9}>{title[9]}</animated.h1>
        <animated.h1 style={fadeInUp10}>{title[10]}</animated.h1>
        <animated.h1 style={fadeInUp11}>{title[11]}</animated.h1>
        <animated.h1 style={fadeInUp12}>{title[12]}</animated.h1>
        <animated.h1 style={fadeInUp13}>{title[13]}</animated.h1>
        <animated.h1 style={fadeInUp14}>{title[14]}</animated.h1>
        <animated.h1 style={fadeInUp15}>{title[15]}</animated.h1>
      </div>
    </>
  );
};

export default HeroTitle;
