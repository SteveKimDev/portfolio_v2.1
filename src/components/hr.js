import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

const HorizontalRule = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const width = useSpring({
    width: animate ? '100vw' : '0vw',
    delay: 300,
    config: { duration: 1000 },
  });
  return (
    <div>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.hr style={width} className='horizontal-rule' />
    </div>
  );
};

export default HorizontalRule;
