import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TiInfinity } from 'react-icons/ti';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <NavLink style={{ display: "flex"}}>
          <TiInfinity size="3rem" /> <span>Winnie</span>
        </NavLink>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Winnie0313">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/Winnie0313">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
