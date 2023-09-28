import * as React from 'react';

import Layout from '../layout/layout';
import Seo from '../layout/seo';

import HeroSection from '../components/01-homepage/hero-section/01-hero-section';
import ProjectSection from '../components/01-homepage/project-section/01-project-section';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title='Product Designer' />
      <HeroSection />
      <ProjectSection />
    </Layout>
  );
};

export default IndexPage;
