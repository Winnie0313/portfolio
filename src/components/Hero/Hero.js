import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, Intro } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding id="home">
    <LeftSection>
      <Intro>
        <Img src="/images/profilePic.png"/>
        <SectionTitle main center>
          Hi, I'm Winnie, <br/> 
          A Full-Stack Web Developer.
        </SectionTitle>
      </Intro>
      <SectionText>
       👩‍🏫 Transition from high school STEM teacher <br />
       🔢 With Background in Computer Science and Mathematics
      </SectionText>
      <a href="/resume/WinnieLi_Resume.pdf" download target='_blank'>
        <Button>
          Download Resume
        </Button>
      </a>
    </LeftSection>
  </Section>
   
);

export default Hero;