import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const AgileCoachingPageImg = () => {
  return (
    <div>
      <Parallax scale={[0.5, 1]} easing='easeOutBack'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1653682083/natalie/02-natalie-agile-coaching_rawgmf.webp'
          alt='agile coaching page img'
          className={Projects.screenshotImg}
        />
      </Parallax>
    </div>
  );
};

export default AgileCoachingPageImg;
