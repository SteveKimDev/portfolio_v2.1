import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const Persona1Img = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1655237883/ebl/persona-1_dhu6aa.webp'
        alt='persona 1 img'
        className={Projects.persona1Img}
      />
    </div>
  );
};

export default Persona1Img;
