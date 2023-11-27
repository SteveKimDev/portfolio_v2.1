import * as React from 'react';
import { Link } from 'gatsby';

import ArrowRight from '../../../svg/arrow-right.svg';

import * as Projects from '../projects.module.css';

const TakeawayCopy = () => {
  return (
    <div>
      <h2 className={`accent-text ${Projects.contentTitle}`}>
        Successfully launched website after 3 months
      </h2>
      <p className={Projects.contentDescription}>
        After launching the website, I monitored its performance and checked if
        we had met our goal of 20 more direct website contacts per month.
        Although the average number of direct contacts was only 10 per month,
        falling short by half, the number of unique visitors to the website
        almost doubled from 47 per month to 83 per month. Despite this, the
        impact of COVID-19 and related restrictions on businesses in South Korea
        made these achievements a success. As COVID-19 restrictions are lifted,
        we anticipate an increase in these metrics.
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

export default TakeawayCopy;
