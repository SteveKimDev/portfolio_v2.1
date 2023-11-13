import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const FilterScreenshotImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699909314/NumbersUSA-web/filter-screen_fxx44j.webp'
        alt='filter diagram img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default FilterScreenshotImg;
