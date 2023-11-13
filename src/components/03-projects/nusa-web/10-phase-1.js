import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import HomepageScreenshotImg from './media/01-homepage-screenshot-img';

import * as Projects from '../projects.module.css';

const Phase1 = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp1 = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '10px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp1} className={`cards ${Projects.phaseDiv}`}>
        <h3 className={`green-text ${Projects.detailTitle}`}>
          Boost sign-up rates among the 20-40 year old demographic:
        </h3>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          The goal to revamp it's website design is to attract and engage a
          younger audience by introducing a visually appealing and modern design
          that alleviates any perceptions of outdatedness and fosters trust.
        </p>
        <HomepageScreenshotImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To achieve our goal, we undertook a comprehensive approach. First,
          extensive user research and interviews with key stakeholders were
          conducted to gain deep insights into the website's current
          shortcomings and the expectations of the target audience. By analyzing
          user behaviors, preferences, and pain points, our team identified
          critical areas for improvement.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          Building on this research, we crafted five detailed persona types,
          namely the Policy Inquirer, Community Advocate, Engaged Activist,
          Congressional Staffer, and Staff Writer. These personas represented a
          diverse range of users, both existing and potential, allowing us to
          tailor the website's design and content to specific user needs and
          motivations. Each persona's journey through the website was carefully
          mapped out, considering their unique goals and behaviors.
        </p>
        <p className={`${Projects.detailDescription}`}>
          With this user-centered approach, NumbersUSA was able to revamp its
          website's design effectively. The new design was not only visually
          appealing but also aligned with the preferences and expectations of
          the younger demographic. The modern design eliminated perceptions of
          outdatedness, making the website more appealing to the target
          audience. Additionally, by fostering a sense of trust and relevance,
          the redesigned website successfully attracted and engaged the desired
          demographic, ultimately leading to increased sign-up rates and
          achieving the business goal.
        </p>
      </animated.div>
    </>
  );
};

export default Phase1;
