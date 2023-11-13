import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const TakeActionImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699911172/NumbersUSA-web/take_action-1_nkbaa1.webp'
        alt='take action img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default TakeActionImg;
