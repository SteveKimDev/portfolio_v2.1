import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const FilterDiagramImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699909314/NumbersUSA-web/filter-diagram_uutxu6.webp'
        alt='filter diagram img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default FilterDiagramImg;
