import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Winnie. <br/> 
        A Full-Stack Web Developer <br />
        From 0 to ♾️, and Beyond!
      </SectionTitle>
      <SectionText>
       🔢 With Background in Mathematics  
       🧠 Fast and Lifelong Learner <br /> 
       💡 Probelm Solver 
       👩‍💻 Hard Worker  
       🌸 Nature Lover 
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