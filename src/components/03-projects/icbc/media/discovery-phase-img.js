import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const DiscoveryPhaseImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1698854603/ICBC/discovery-1_nz2o9y.webp'
        alt='discovery phase img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default DiscoveryPhaseImg;
