import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const DonatePageImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699912914/NumbersUSA-web/Donate_wtypzk.webp'
        alt='donate page img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default DonatePageImg;
