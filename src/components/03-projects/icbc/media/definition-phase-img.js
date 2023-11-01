import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const DefinitionPhaseImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1698854603/ICBC/sitemap-1_hyx4zt.webp'
        alt='discovery phase img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default DefinitionPhaseImg;
