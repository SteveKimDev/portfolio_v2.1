import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const DonateFormImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699912912/NumbersUSA-web/Donate_Form_uebkls.webp'
        alt='donate form img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default DonateFormImg;
