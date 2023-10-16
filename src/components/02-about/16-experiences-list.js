import * as React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import ExperienceOne from './17-experience-1';
import ExperienceTwo from './18-experience-2';
import ExperienceThree from './19-experience-3';
import ExperienceFour from './20-experience-4';
import ExperienceFive from './21-experience-5';
import ExperienceSix from './22-experience-6';

const ExperiencesList = () => {
  return (
    <div>
      <Accordion>
        <ExperienceOne />
        <ExperienceTwo />
        <ExperienceThree />
        <ExperienceFour />
        <ExperienceFive />
        <ExperienceSix />
      </Accordion>
    </div>
  );
};

export default ExperiencesList;
