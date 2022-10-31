import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { IoMdInfinite } from 'react-icons/io';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "black"}}>
          <IoMdInfinite size="3rem" /> <span>Winnie</span>
        </a>
      </Link>

    </Div1>
  </Container>
);

export default Header;
