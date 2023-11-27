import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const HomePageKoreanImg = () => {
  return (
    <div className={Projects.mobileFirstImgDiv1}>
      <p className={`accent-text text-center ${Projects.contentDescription}`}>
        Korean Version
      </p>
      <div className={`cards ${Projects.mobileFirstMediaDiv}`}>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1655318377/ebl/home-page-mobile-korean_z6shuk.webp'
          alt='home page mobile korean img'
          className={Projects.eblMobileImg}
        />
      </div>
    </div>
  );
};

export default HomePageKoreanImg;
