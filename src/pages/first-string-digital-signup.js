import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HorizontalRule from '../components/hr';
import IntroSection from '../components/03-projects/fsd-signup/01-intro-section';
import ContributionSection from '../components/03-projects/fsd-signup/06-contribution-section';
import PaintPointsSection from '../components/03-projects/fsd-signup/08-pain-points-sction';
import PersonasSection from '../components/03-projects/fsd-signup/13-personas-section';
import UserFlowSection from '../components/03-projects/fsd-signup/17-user-flow-section';
import TakeawaySection from '../components/03-projects/fsd-signup/29-takeaway-section';

const FirstStringDigtial = () => {
  return (
    <Layout>
      <Seo title='First String Digital - Sign Up' />
      <IntroSection />
      <HorizontalRule />
      <ContributionSection />
      <HorizontalRule />
      <PaintPointsSection />
      <HorizontalRule />
      <PersonasSection />
      <HorizontalRule />
      <UserFlowSection />
      <HorizontalRule />
      <TakeawaySection />
    </Layout>
  );
};

export default FirstStringDigtial;
