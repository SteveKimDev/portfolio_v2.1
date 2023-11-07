import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout//seo';
import HorizontalRule from '../components/hr';
import IntroSection from '../components/03-projects/nusa-web/01-intro-section';
import ContributionSection from '../components/03-projects/nusa-web/06-contribution-section';
import PhaseSection from '../components/03-projects/nusa-web/08-phase-sction';
import PersonasSection from '../components/03-projects/nusa-web/14-personas-section';

const NumbersUSAWebsite = () => (
  <Layout>
    <Seo title='NumbersUSA Website' />
    <IntroSection />
    <HorizontalRule />
    <ContributionSection />
    <HorizontalRule />
    <PhaseSection />
    <HorizontalRule />
    <PersonasSection />
  </Layout>
);

export default NumbersUSAWebsite;
