import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am Winnie <br/> 
        A Full-Stack Web Developer
      </SectionTitle>
      <SectionText>
        With background in Mathematics  
      </SectionText>
      <Button>
        Download Resume
      </Button>
    </LeftSection>

  </Section>
   
);

export default Hero;