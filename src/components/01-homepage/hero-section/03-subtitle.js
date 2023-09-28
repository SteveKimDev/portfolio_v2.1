import * as React from 'react';
import { useSpring, animated } from 'react-spring';

import * as Home from '../home.module.css';

const Subtitle = () => {
  const subtitle = [
    'f',
    'o',
    'c',
    'u',
    's',
    'e',
    'd',
    'o',
    'n',
    'w',
    'e',
    'b',
    's',
    'i',
    't',
    'e',
    's',
  ];

  const fadeInUp0 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    config: { duration: 500 },
  });

  const fadeInUp1 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 50,
    config: { duration: 500 },
  });

  const fadeInUp2 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 100,
    config: { duration: 500 },
  });

  const fadeInUp3 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 150,
    config: { duration: 500 },
  });

  const fadeInUp4 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 200,
    config: { duration: 500 },
  });

  const fadeInUp5 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 250,
    config: { duration: 500 },
  });

  const fadeInUp6 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 300,
    config: { duration: 500 },
  });

  const fadeInUp7 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 350,
    config: { duration: 500 },
  });

  const fadeInUp8 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 400,
    config: { duration: 500 },
  });

  const fadeInUp9 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 450,
    config: { duration: 500 },
  });

  const fadeInUp10 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 500,
    config: { duration: 500 },
  });

  const fadeInUp11 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 550,
    config: { duration: 500 },
  });

  const fadeInUp12 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 600,
    config: { duration: 500 },
  });

  const fadeInUp13 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 650,
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
    delay: 750,
    config: { duration: 500 },
  });

  const fadeInUp16 = useSpring({
    from: { opacity: 0, translateY: '10px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 800,
    config: { duration: 500 },
  });

  return (
    <div className={Home.subtitleSection}>
      {/* line 1 */}
      <div className={Home.subtitleLine}>
        {/* Focused */}
        <animated.span style={fadeInUp0}>{subtitle[0]}</animated.span>
        <animated.span style={fadeInUp1}>{subtitle[1]}</animated.span>
        <animated.span style={fadeInUp2}>{subtitle[2]}</animated.span>
        <animated.span style={fadeInUp3}>{subtitle[3]}</animated.span>
        <animated.span style={fadeInUp4}>{subtitle[4]}</animated.span>
        <animated.span style={fadeInUp5}>{subtitle[5]}</animated.span>
        <animated.span style={fadeInUp6} className={Home.space}>
          {subtitle[6]}
        </animated.span>

        {/* On */}
        <animated.span style={fadeInUp7}>{subtitle[7]}</animated.span>
        <animated.span style={fadeInUp8} className={Home.space}>
          {subtitle[8]}
        </animated.span>
      </div>

      {/* Line 2 */}
      <div className={Home.subtitleLine}>
        {/* Websites */}
        <animated.span style={fadeInUp9}>{subtitle[9]}</animated.span>
        <animated.span style={fadeInUp10}>{subtitle[10]}</animated.span>
        <animated.span style={fadeInUp11}>{subtitle[11]}</animated.span>
        <animated.span style={fadeInUp12}>{subtitle[12]}</animated.span>
        <animated.span style={fadeInUp13}>{subtitle[13]}</animated.span>
        <animated.span style={fadeInUp14}>{subtitle[14]}</animated.span>
        <animated.span style={fadeInUp15}>{subtitle[15]}</animated.span>
        <animated.span style={fadeInUp16}>{subtitle[16]}</animated.span>
      </div>
    </div>
  );
};

export default Subtitle;
