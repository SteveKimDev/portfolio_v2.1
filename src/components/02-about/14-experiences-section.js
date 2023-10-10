import * as React from 'react';
import ExperiencesTitle from './15-experiences-title';
import ExperiencesList from './16-experiences-list';

import * as About from './about.module.css';

const ExperiencesSection = () => {
  return (
    <section className={About.experiencesSection}>
      <ExperiencesTitle />
      <ExperiencesList />
    </section>
  );
};

export default ExperiencesSection;
