import * as React from 'react';
import { Link } from 'gatsby';

import ArrowRight from '../../../svg/arrow-right.svg';

import * as Projects from '../projects.module.css';

const TakeawayTitleDescription = () => {
  return (
    <div>
      <h2 className={`accent-text ${Projects.contentTitle}`}>
        Transitioning from an obsolete platform to a modern website experience
      </h2>
      <p className={`mb-3 ${Projects.contentDescription}`}>
        Throughout the ICBC website migration project, my role as an Information
        Architect saw several successes. The Discovery Phase provided a strong
        foundation, offering a deep understanding of the legacy website's
        structure. In the Definition Phase, efforts such as sitemap development,
        template definitions, and component redesigns streamlined content
        presentation. Collaboration with the development team and content
        modeling in Contentful contributed significantly. Lastly, my involvement
        in content migration and User Acceptance Testing (UAT) ensured a
        seamless transition and a high-quality final product.
      </p>
      <p className={Projects.contentDescription}>
        During the project, I learned the critical importance of in-depth
        website audits, efficient content structuring, and the value of clear
        sitemaps. The Definition Phase highlighted the significance of
        consistent page templates and user-friendly components for a cohesive
        user experience. Content modeling in Contentful enhanced my skills in
        creating adaptable content structures. Managing content migration and
        UAT processes underscored the need for meticulous attention to detail
        and thorough testing to ensure project success. These learnings have
        greatly influenced my approach as an Information Architect and
        contributed to the project's positive outcomes.
      </p>
      {/* Link */}
      <div className={`${Projects.linkDiv}`}>
        <Link to='/#projects'>
          Back to Case Studies
          <ArrowRight className={`${Projects.arrowRight}`} />
        </Link>
      </div>
    </div>
  );
};

export default TakeawayTitleDescription;
