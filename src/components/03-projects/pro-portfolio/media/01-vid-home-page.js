import * as React from 'react';

import * as Projects from '../../projects.module.css';

const LargeVideo = () => {
  return (
    <div className={`cards ${Projects.largeVideoDiv}`}>
      <video className={Projects.largeVideo} autoPlay loop muted playsInline>
        <source
          src='https://res.cloudinary.com/stevekim/video/upload/q_auto/v1654112154/natalie/homepage-scolling_ogc0t7.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
};

export default LargeVideo;
