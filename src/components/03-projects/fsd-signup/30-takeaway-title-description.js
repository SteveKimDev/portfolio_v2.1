import * as React from 'react';
import { Link } from 'gatsby';

import ArrowRight from '../../../svg/arrow-right.svg';

import * as Projects from '../projects.module.css';

const TakeawayTitleDescription = () => {
  return (
    <div>
      <h2 className={`accent-text ${Projects.contentTitle}`}>
        Transforming an ineffective process into a successful solution
      </h2>
      <p className={Projects.contentDescription}>
        The successful implementation of a user-friendly sign-up process
        resulted in a significant decrease in drop-off rates during the
        onboarding process. The previous 35% drop-off rate was reduced to less
        than 20% after the design and launch of the digital sign-up process. The
        process was refined through testing and design iterations, ensuring that
        only the necessary information was gathered, and the client was not
        overwhelmed with tasks. This, in turn, allowed for a more meaningful
        consultation call and an efficient website development process. Future
        steps include further refinement through client interviews, with the
        goal of reducing the drop-off rate to below 10%.
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
