import * as React from 'react';
import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HorizontalRule from '../components/hr';

import IntroSection from '../components/03-projects/icbc/01-intro-section';
import ContributionSection from '../components/03-projects/icbc/06-contribution-section';
import PhaseSection from '../components/03-projects/icbc/08-phase-sction';
import TakeawaySection from '../components/03-projects/icbc/13-takeaway-section';

const ICBC = () => {
  return (
    <Layout>
      <Seo title='ICBC - Content Migration and Website' />
      <IntroSection />
      <HorizontalRule />
      <ContributionSection />
      <HorizontalRule />
      <PhaseSection />
      <HorizontalRule />
      <TakeawaySection />
    </Layout>
  );
};

export default ICBC;
