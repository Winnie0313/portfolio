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
       🔢 With background in Mathematics <br/> 
       🧠 Fast and lifelong Learner <br/> 
       💡 Probelm Solver <br/> 
       👩‍💻 Hard Worker <br/> 
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