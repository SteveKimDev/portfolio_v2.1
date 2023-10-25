import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';

import MobileFirstCopy from './19-mobile-first-copy';
import HomePageKoreanImg from './media/04-img-home-page-mobile-korean';
import HomePageEnglishImg from './media/05-img-home-page-mobile-english';
import VideoEblScroll from './media/06-vid-ebl-scoll-mobile';

import * as Projects from '../projects.module.css';

const MobileFirstSection = () => {
  return (
    <section>
      <Row>
        {/* title col */}
        <Col sm={{ offset: 3, span: 6 }}>
          <MobileFirstCopy />
        </Col>

        {/* mobile img 1 */}
        <Col sm={4}>
          <Parallax
            translateY={['50px', '-50px']}
            easing='easeInOut'
            className={Projects.mobileFirstTransform}
          >
            <VideoEblScroll />
          </Parallax>
        </Col>

        {/* mobile img 2 */}
        <Col sm={4}>
          <HomePageEnglishImg />
        </Col>

        {/* mobile video scroll */}
        <Col sm={4}>
          <Parallax
            translateY={['-50px', '50px']}
            easing='easeInOut'
            className={Projects.mobileFirstTransform}
          >
            <HomePageKoreanImg />
          </Parallax>
        </Col>
      </Row>
    </section>
  );
};

export default MobileFirstSection;
