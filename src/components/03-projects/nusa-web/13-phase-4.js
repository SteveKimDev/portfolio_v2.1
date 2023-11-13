import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import DonatePageImg from './media/08-donate-page-img';
import DonateFormImg from './media/09-donate-form-img';

import * as Projects from '../projects.module.css';

const Phase4 = () => {
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
      <animated.div
        style={fadeInUp1}
        className={`cards ${Projects.phaseDivLast}`}
      >
        <h3 className={`green-text ${Projects.detailTitle}`}>
          Donations Integration:
        </h3>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          To improve donations integration, we implemented a strategic approach
          focused on enhancing the website's functionality and user experience.
        </p>
        <p className={`mb-3 ${Projects.detailDescription}`}>
          Firstly, we incorporated a prominent and easily accessible donation
          button on the website. This button was strategically placed to ensure
          high visibility, making it convenient for visitors to find and access.
          Additionally, we designed intuitive and user-friendly donation forms
          that were easy to complete. These forms minimized friction in the
          donation process, simplifying the steps required for users to
          contribute.
        </p>
        <DonatePageImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          In order to motivate visitors to make donations, we provided
          comprehensive information about the positive impact of their
          contributions. This included clear and compelling messaging about how
          their financial support directly contributed to the organization's
          mission and goals. By emphasizing the tangible outcomes of donations,
          we aimed to inspire trust and confidence in potential donors.
        </p>
        <DonateFormImg />
        <p className={`mb-3 ${Projects.detailDescription}`}>
          Furthermore, we offered versatile donation options to cater to
          different preferences and financial situations. Visitors had the
          choice to make either one-time or recurring donations, providing
          flexibility in their level of commitment. This variety of options
          encouraged greater financial support by accommodating a broader range
          of donor preferences.
        </p>
        <p className={`${Projects.detailDescription}`}>
          Overall, by incorporating a prominent donation button, optimizing
          donation forms for ease of use, providing persuasive information about
          the impact of contributions, and offering versatile donation choices,
          we successfully achieved the business goal of improving donations
          integration. This approach facilitated a more seamless and engaging
          donation experience for website visitors, ultimately leading to
          increased financial support for the organization.
        </p>
      </animated.div>
    </>
  );
};

export default Phase4;
