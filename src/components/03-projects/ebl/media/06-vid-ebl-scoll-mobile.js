import * as React from 'react';

import * as Projects from '../../projects.module.css';

const VideoEblScroll = () => {
  return (
    <div className={Projects.mobileFirstImgDiv3}>
      <p className={`green-text text-center ${Projects.contentDescription}`}>
        Mobile Experience
      </p>
      <div className={`cards ${Projects.mobileFirstMediaDiv}`}>
        <video
          className={Projects.videoEblScroll}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src='https://res.cloudinary.com/stevekim/video/upload/q_auto/v1655318737/ebl/ebl-scroll_lvl3su.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
};

export default VideoEblScroll;
