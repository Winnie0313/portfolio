import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { AiTwotoneMail, AiFillPhone } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
          <SocialIcons style={{paddingTop: "8px", paddingRight: "50px"}} href="https://github.com/Winnie0313">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons style={{paddingTop: "8px"}} href="https://www.linkedin.com/in/winnieli03/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
      </FooterWrapper>
      
    </div>
  );
};

export default Footer;
