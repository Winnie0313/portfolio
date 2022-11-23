import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiInfinity } from 'react-icons/gi';
import { IoIosArrowDropdownCircle, IoIosArrowDropdown } from 'react-icons/io';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/Dropdown';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Li, DropDownContainer, Button, DropDownContent, DropDownContentLink } from './HeaderStyles';



const Header = () =>  {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
    <Div1>
      <Link href="/">
        <NavLink style={{ display: "flex", alignItems: "center", marginBottom: "20px"}}>
          <GiInfinity size="3rem" /> <span>WINNIE</span>
        </NavLink>
      </Link>
    </Div1>
    <Div2>
      <Li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </Li>
      <Li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </Li>
      <Li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </Li>
      <Li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </Li>
    </Div2>
    <DropDownContainer>
      
  
    </DropDownContainer>
    <Div3>
      <SocialIcons href="https://github.com/Winnie0313">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/winnieli03/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>

  );
  
};

export default Header;
