import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Welcome. <br />
      Feel Free to Look Around!
      </SectionTitle>
      <SectionText>
        My name is Zach Puckett, and my mission is to impact the world of technology with effective design, clear and concise communication and expert engineering.
      </SectionText>
      <Button onClick={props.handleClick}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;