import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const Persona2Img = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1674160359/FSD%20Sign%20Up/person2_mpgfdd.webp'
        alt='persona 2 img'
        className={Projects.persona1Img}
      />
    </div>
  );
};

export default Persona2Img;
