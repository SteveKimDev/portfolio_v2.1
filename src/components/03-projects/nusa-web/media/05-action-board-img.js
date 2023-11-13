import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const ActionBoardImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699911145/NumbersUSA-web/action_board_mm1xi9.webp'
        alt='action board img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default ActionBoardImg;
