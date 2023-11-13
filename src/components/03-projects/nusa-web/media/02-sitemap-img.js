import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Projects from '../../projects.module.css';

const SitemapImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1699908453/NumbersUSA-web/sitemap_advz2o.webp'
        alt='sitemap img'
        className={Projects.phaseImg}
      />
    </div>
  );
};

export default SitemapImg;
