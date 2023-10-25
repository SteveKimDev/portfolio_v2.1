import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Row, Col } from 'react-bootstrap';

import MobileScreenCopy from './11-mobile-screen-copy';
import VideoMobile1 from './media/05-vid-mobile1';
import VideoMobile2 from './media/06-vid-mobile2';
import VideoMobile3 from './media/07-vid-mobile3';

import * as Projects from '../projects.module.css';

const MobileScreenSection = () => {
  return (
    <section>
      <Row>
        {/* Content Col */}
        <Col sm={{ offset: 3, span: 6 }}>
          <MobileScreenCopy />
        </Col>

        {/* Video 1 Col */}
        <Col sm={4}>
          <Parallax
            translateY={['50px', '-50px']}
            easing='easeInOut'
            className={Projects.videoMobileTransform}
          >
            <VideoMobile1 />
          </Parallax>
        </Col>

        {/* Video 2 Col */}
        <Col sm={4}>
          <VideoMobile2 />
        </Col>

        {/* Video 3 Col */}
        <Col sm={4}>
          <Parallax
            translateY={['-50px', '50px']}
            easing='easeInOut'
            className={Projects.videoMobileTransform}
          >
            <VideoMobile3 />
          </Parallax>
        </Col>
      </Row>
    </section>
  );
};

export default MobileScreenSection;
