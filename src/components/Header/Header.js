import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiInfinity } from 'react-icons/gi';
import { IoIosArrowDropdownCircle, IoMdArrowDropdown } from 'react-icons/io';
import { CgDetailsMore } from 'react-icons/cg';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Li, DropDownContainer, Button, DropDownContent, DropDownContentLink } from './HeaderStyles';



const Header = () =>  {
  const [open, setOpen] = useState(false);

  const btnRef = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };

  // close dropdown menu when clik anywhere outside the dropdowm button
  useEffect(() => {
    const closeDropdown = e => {
      console.log(e);
      if (!btnRef.current.contains(e.target)) {
        setOpen(false);
        console.log(btnRef.current)
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);

  }, []);

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
      <Button ref={btnRef} style={{paddingTop: "5px"}} onClick={handleOpen}>
        <CgDetailsMore size="3rem"/>
      </Button>
      {open ? (
        <DropDownContent>
          <DropDownContentLink href="#projects">Projects</DropDownContentLink>
          <DropDownContentLink href="#skills">Skills</DropDownContentLink>
          <DropDownContentLink href="#about">About</DropDownContentLink>
          <DropDownContentLink href="#contact">Contact</DropDownContentLink>
        </DropDownContent>
      ) : null}
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
