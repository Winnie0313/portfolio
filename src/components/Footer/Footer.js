import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>make</Slogan>
          </CompanyContainer>
          <SocialIconsContainer>
          <SocialIcons style={{paddingTop: "8px"}} href="https://github.com/Winnie0313">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons style={{paddingTop: "8px"}} href="https://www.linkedin.com/in/winnieli03/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          </SocialIconsContainer>
          
        </SocialIconsContainer>
      </FooterWrapper>
      
    </div>
  );
};

export default Footer;
