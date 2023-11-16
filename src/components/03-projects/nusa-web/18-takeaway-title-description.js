import * as React from 'react';
import { Link } from 'gatsby';

import ArrowRight from '../../../svg/arrow-right.svg';

import * as Projects from '../projects.module.css';

const TakeawayTitleDescription = () => {
  return (
    <div>
      <h2 className={`green-text ${Projects.contentTitle}`}>
        Enhancing NumbersUSA's online presence
      </h2>
      <p className={`mb-3 ${Projects.contentDescription}`}>
        The project achieved several notable successes, foremost among them
        being the successful transformation of NumbersUSA's website. We revamped
        the design to appeal to a younger audience while retaining existing
        users, resulting in increased sign-up rates and engagement. The
        introduction of a comprehensive content organization system made
        relevant information easily accessible, enhancing user experience.
        Additionally, the streamlined participation in the political process and
        improved donations integration contributed to a more effective online
        platform.
      </p>
      <p className={Projects.contentDescription}>
        Through this project, I learned the importance of user-centered design
        and the value of collaboration with stakeholders to meet organizational
        goals. It emphasized the significance of clear communication, meticulous
        planning, and adaptability in achieving project objectives. Overall, the
        project not only improved the website but also enhanced my understanding
        of UX and content strategy.
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

export default TakeawayTitleDescription;
