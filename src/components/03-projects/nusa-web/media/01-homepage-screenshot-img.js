import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const HomepageScreenshotImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699905137/NumbersUSA-web/homepage-screenshot_w1niml.webp'
        alt='homepage screenshot img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default HomepageScreenshotImg;
