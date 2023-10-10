import * as React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import ExperienceOne from './17-experience-1';
import ExperienceTwo from './18-experience-2';
import ExperienceThree from './19-experience-3';
import ExperienceFour from './20-experience-4';
import ExperienceFive from './21-experience-5';

const ExperiencesList = () => {
  return (
    <div>
      <Accordion>
        <ExperienceTwo />
        <ExperienceOne />
        <ExperienceThree />
        <ExperienceFour />
        <ExperienceFive />
      </Accordion>
    </div>
  );
};

export default ExperiencesList;
