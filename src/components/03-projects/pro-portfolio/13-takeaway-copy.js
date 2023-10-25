import * as React from 'react';
import { Link } from 'gatsby';

import ArrowRight from '../../../svg/arrow-right.svg';

import * as Projects from '../projects.module.css';

const TakeawayCopy = () => {
  return (
    <div>
      <h2 className={`green-text ${Projects.contentTitle}`}>
        Successfully launched website after 2 months
      </h2>
      <p className={Projects.contentDescription}>
        The process of designing and launching the website took a total of two
        months. The first month was spent on ideation and finalizing the design,
        while the second month was dedicated to development, testing, and
        launching the website. After a couple of months of the website's launch,
        Natalie's efforts were rewarded when she received and accepted a job
        offer from a tech company based in San Francisco, CA, showing the impact
        that a well-designed professional portfolio website can have on a
        person's career.
      </p>
      {/* Link */}
      <div className={`${Projects.linkDiv}`}>
        <Link to='/#projects'>
          Back to Selected Projects
          <ArrowRight className={`${Projects.arrowRight}`} />
        </Link>
      </div>
    </div>
  );
};

export default TakeawayCopy;
