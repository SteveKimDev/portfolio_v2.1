import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { StaticImage } from 'gatsby-plugin-image';

import * as About from './about.module.css';

const AboutImg = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, translateY: '0px' },
    to: { opacity: 1, translateY: '-30px' },
    delay: 500,
    config: { duration: 1000 },
  });
  return (
    <animated.div style={fadeInUp}>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1654665926/about-img-2_xtvlv6.webp'
        alt='about img'
        className={About.aboutImg}
      />
    </animated.div>
  );
};

export default AboutImg;
