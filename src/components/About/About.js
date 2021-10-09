import React from 'react';

import { Section, SectionText, SectionTitle, ProfileImage } from '../../styles/GlobalComponents';
import { AboutSection } from './AboutStyles';

const About = (props) => (
  <Section row nopadding id="about">
    <AboutSection>
      <SectionTitle main center>
       <br />
      Contact Me!
      </SectionTitle>
      <SectionText>
        Web Developer and Graphic Designer
      </SectionText>
      <ProfileImage />
    </AboutSection>
  </Section>
);

export default About;