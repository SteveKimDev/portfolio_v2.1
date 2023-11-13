import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const CongratsImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699911160/NumbersUSA-web/take_action_congrats_toi0du.webp'
        alt='congrats page img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default CongratsImg;
