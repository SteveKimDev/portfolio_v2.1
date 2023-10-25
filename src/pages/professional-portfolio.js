import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout//seo';
import IntroSection from '../components/03-projects/pro-portfolio/01-intro-section';
import ContributionSection from '../components/03-projects/pro-portfolio/06-contribution-section';
// import ScreenshotSection from '../components/natalie-cervantes/06-screenshot-section';
// import MobileScreenSection from '../components/natalie-cervantes/08-mobile-screen-section';
// import TakeawaySection from '../components/natalie-cervantes/10-takeaway-section';
import HorizontalRule from '../components/hr';

const ProfessionalPortfolio = () => (
  <Layout>
    <Seo title='Professional Portfolio Website' />
    <IntroSection />
    <HorizontalRule />
    <ContributionSection />
    {/* <ScreenshotSection /> */}
    {/* <MobileScreenSection /> */}
    {/* <TakeawaySection /> */}
  </Layout>
);

export default ProfessionalPortfolio;
