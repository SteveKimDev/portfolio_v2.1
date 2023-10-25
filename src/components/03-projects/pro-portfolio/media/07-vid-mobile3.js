/*
 * [SK]
 * The background video is hosted on Cloudinary. [NC] This saves bandwidth by not storing the video file locally on the device.
 * By hosting the video on a DAM like Cloudinary we can also use it without an iframe. If we used YouTube we need to embed the
 * video with an iframe. Therefore, When the browseer is resized, regardless of any iframe styles, the video will not resize with * the window. Storing a video file in Contentful would mean it would be considered an asset (a binary file), however we'd need to * use  StaticQuery to query it using GraphQL and in Gatsby we can not use StaticQuery with variables. Below we create a state    * variable to set state, then play the video with the stated attributes on page visit.
 */

import * as React from 'react';

import * as Projects from '../../projects.module.css';

const VideoMobile3 = () => {
  return (
    <div className={`cards ${Projects.videoMobileDiv}`}>
      <video className={Projects.videoMobile} controls muted>
        <source
          src='https://res.cloudinary.com/stevekim/video/upload/q_auto/v1654883980/natalie/mobile3_eppffb.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
};

export default VideoMobile3;
