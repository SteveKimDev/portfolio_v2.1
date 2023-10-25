import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const HomePageEnglishImg = () => {
  return (
    <div className={Projects.mobileFirstImgDiv2}>
      <p className={`green-text text-center ${Projects.contentDescription}`}>
        English Version
      </p>
      <div className={`cards ${Projects.mobileFirstMediaDiv}`}>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1655318378/ebl/home-page-mobile-english_pkjg6x.webp'
          alt='home page mobile english img'
          className={Projects.eblMobileImg}
        />
      </div>
    </div>
  );
};

export default HomePageEnglishImg;
