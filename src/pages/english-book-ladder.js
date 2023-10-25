import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout/seo';
import IntroSection from '../components/03-projects/ebl/01-intro-section';
import ContributionSection from '../components/03-projects/ebl/06-contribution-section';
import PainPointsSection from '../components/03-projects/ebl/08-pain-points-section';
import PersonasSection from '../components/03-projects/ebl/13-personas-section';
import MobileFirstSection from '../components/03-projects/ebl/17-mobile-first-section';
import TakeawaySection from '../components/03-projects/ebl/20-takeaway-section';
import HorizontalRule from '../components/hr';

const EnglishBookLadder = () => (
  <Layout>
    <Seo title='English Book Ladder' />
    <IntroSection />
    <HorizontalRule />
    <ContributionSection />
    {/* <CaseStudySection /> */}
    <HorizontalRule />
    <PainPointsSection />
    <HorizontalRule />
    <PersonasSection />
    <HorizontalRule />
    <MobileFirstSection />
    <HorizontalRule />
    <TakeawaySection />
  </Layout>
);

export default EnglishBookLadder;
