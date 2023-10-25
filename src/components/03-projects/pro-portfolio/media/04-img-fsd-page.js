import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const FsdPageImg = () => {
  return (
    <div>
      <Parallax scale={[0.5, 1]} easing='easeOutBack'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1653682091/natalie/04-natalie-fsd_khwzv8.webp'
          alt='FSD page img'
          className={Projects.screenshotImg}
        />
      </Parallax>
    </div>
  );
};

export default FsdPageImg;
