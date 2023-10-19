import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const ScreenshotImg08 = () => {
  return (
    <div>
      <Parallax scale={[0.5, 1]} easing='easeOutBack'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1673392358/FSD%20Sign%20Up/08-home-dashboard_usbfdp.webp'
          alt='home page img'
          className={Projects.screenshotImg}
        />
      </Parallax>
    </div>
  );
};

export default ScreenshotImg08;
