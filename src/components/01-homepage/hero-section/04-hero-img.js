import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const HeroImg = () => {
  const expand = useSpring({
    from: { opacity: 0, translateY: '0px' },
    to: { opacity: 1, translateY: '-30px' },
    delay: 500,
    config: { duration: 1000 },
  });
  return (
    <animated.div style={expand}>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1654665926/about-img-1_mznvio.webp'
        alt='hero img'
        className={Home.heroImg}
      />
    </animated.div>
  );
};

export default HeroImg;
