import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout/seo';
import HorizontalRule from '../components/hr';
import IntroSection from '../components/03-projects/fsd-signup/01-intro-section';
import ContributionSection from '../components/03-projects/fsd-signup/06-contribution-section';
import PaintPointsSection from '../components/03-projects/fsd-signup/08-pain-points-sction';
// import ScreenshotSection from '../components/fsd-signup/06-screenshot-section';
// import PersonasSection from '../components/fsd-signup/12-personas-section';
// import UserFlowSection from '../components/fsd-signup/16-user-flow-section';
// import TakeawaySection from '../components/fsd-signup/18-takeaway-section';
// import NextProjectSection from '../components/fsd-signup/20-next-project-section';

const FirstStringDigtial = () => {
  return (
    <Layout>
      <Seo title='First String Digital - Sign Up' />
      <IntroSection />
      <HorizontalRule />
      <ContributionSection />
      <HorizontalRule />
      <PaintPointsSection />
      {/* <ScreenshotSection /> */}
      {/* <PersonasSection /> */}
      {/* <UserFlowSection /> */}
      {/* <TakeawaySection /> */}
      {/* <NextProjectSection /> */}
    </Layout>
  );
};

export default FirstStringDigtial;
