import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';

import ArrowRight from '../../../svg/arrow-right.svg';

import * as Home from '../home.module.css';

const Description = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // fade animation
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    config: { duration: 1000 },
  });

  const fadeInUp2 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '20px',
    delay: 1000,
    config: { duration: 1000 },
  });

  return (
    <div className={Home.descriptionSection}>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />

      {/* Description */}
      <div className={`${Home.description}`}>
        <animated.p style={fadeInUp1}>
          Combining product design expertise with web development experience, I
          offer a unique perspective to create engaging, user-friendly web
          applications, utilizing both creative and technical problem-solving
          skills.
        </animated.p>

        {/* Link */}
        <animated.div style={fadeInUp2} className={`${Home.linkDiv}`}>
          <Link to='/about' className='accent-text'>
            Learn more about me
            <ArrowRight className={`${Home.arrowRight}`} />
          </Link>
        </animated.div>
      </div>
    </div>
  );
};

export default Description;
