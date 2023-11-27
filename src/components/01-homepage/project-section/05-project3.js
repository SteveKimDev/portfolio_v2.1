import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { ParallaxBanner } from 'react-scroll-parallax';

import * as Home from '../home.module.css';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 75,
  (x - window.innerWidth / 2) / 75,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Project03 = () => {
  // animation for image
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp01 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 100,
    config: { duration: 1000 },
  });

  const fadeInUp02 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 700,
    config: { duration: 1000 },
  });

  return (
    <div className='relative'>
      <Link to='/english-book-ladder'>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.to(trans) }}
        >
          <Waypoint
            bottomOffset='30%'
            onEnter={() => {
              if (!animate) toggle(true);
            }}
          />
          <ParallaxBanner
            layers={[
              {
                image:
                  'https://res.cloudinary.com/stevekim/image/upload/q_auto/v1653508626/ebl/ebl-cover_b3jmno.webp',
                speed: -5,
              },
            ]}
            style={{ aspectRatio: '2 / 1' }}
            className={`${Home.image} ${Home.project3}`}
          />
        </animated.div>

        <animated.div style={fadeInUp01} className={Home.projectTitleDiv}>
          <span className={`accent-text ${Home.projectOrder}`}>04</span>
          <span className={`${Home.projectTitle}`}>
            English Book
            <br />
            Ladder
          </span>
        </animated.div>
        <animated.div style={fadeInUp02}>
          <p className={`${Home.category}`}>UX/UI Design &amp; Development</p>
        </animated.div>
      </Link>
    </div>
  );
};

export default Project03;
