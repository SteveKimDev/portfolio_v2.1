import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout/seo';
import IntroSection from '../components/02-about/01-intro-section';
import ApproachSection from '../components/02-about/05-approach-section';
import HorizontalRule from '../components/hr';
import TestimonialSection from '../components/02-about/09-testimonials-section';
import ExperiencesSection from '../components/02-about/14-experiences-section';

const AboutPage = () => (
  <Layout>
    <Seo title='About' />
    <IntroSection />
    <HorizontalRule />
    <ApproachSection />
    <HorizontalRule />
    <TestimonialSection />
    <HorizontalRule />
    <ExperiencesSection />
  </Layout>
);

export default AboutPage;
