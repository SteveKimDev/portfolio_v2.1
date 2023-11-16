import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const ContentMigrationImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1700088739/NumbersUSA-web/content-migration_esfju1.webp'
        alt='content migration img'
        className={`m-0 ${Projects.phaseImg}`}
      />
    </div>
  );
};

export default ContentMigrationImg;
