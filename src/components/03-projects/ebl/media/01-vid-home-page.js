import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Projects from '../../projects.module.css';

const VideoHomePage = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '50px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div
        style={fadeInUp1}
        className={`cards ${Projects.largeVideoDiv}`}
      >
        <video className={Projects.largeVideo} autoPlay loop muted playsInline>
          <source
            src='https://res.cloudinary.com/stevekim/video/upload/q_auto/v1655226894/ebl/ebl-home-page_fmg8zy.mp4'
            type='video/mp4'
          />
        </video>
      </animated.div>
    </>
  );
};

export default VideoHomePage;
