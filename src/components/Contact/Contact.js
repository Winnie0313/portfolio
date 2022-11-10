import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './ContactStyles';
import { AiTwotoneMail, AiFillPhone } from 'react-icons/ai';


const Contact = () => (
  <Section id="contact">
    <SectionDivider />
    <SectionTitle>Contact</SectionTitle>
    <LinkList>
      <LinkColumn>
        <AiTwotoneMail size="4rem" />
        <LinkItem href='mailto:li.winnie0313@gmail.com'>li.winnie0313@gmail.com</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <AiFillPhone size="4rem" />
        <LinkItem href='mailto:li.winnie0313@gmail.com'>li.winnie0313@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>

  </Section>
);

export default Contact;
