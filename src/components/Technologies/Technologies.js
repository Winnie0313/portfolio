import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      Proficient in developing web applications using modern font-end and back-end techonologies.
    </SectionText>
    <list>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            Javascript <br />
            HTML <br />
            CSS <br />
          </ListParagraph>
        </ListContainer>

      </ListItem>
    </list>

  </Section>
);

export default Technologies;
