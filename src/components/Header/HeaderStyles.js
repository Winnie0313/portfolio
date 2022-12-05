import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding-left: 3rem;
  font-size: 2rem;
  background-color: #dee2ff;
  position: sticky;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 0.5rem;
  }
  
  
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  margin-left: 35px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Li = styled.li`
  padding-left: 20px;
  align-items: center;
  display: flex;
`

export const DropDownContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    position: relative;
    float: none;
    display: block;
    text-align: left;
    top: auto
  }
`
export const DropDownContent = styled.div`
  position: absolute;
  display: block;
  background-color: #dee2ff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

`
export const DropDownContentLink = styled.a`
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #F0F0F0;
    color: black;
  }

`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.3s ease;
  color: black;
  border-radius: 50px;
  padding: 8px;
  padding-top: 0;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
    color: grey;
    
  }

`
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: black;
  transition: 0.4s ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
    font-weight: bold;
    font-size: 2.1rem;
    text-shadow: 1px 1px grey;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: black;
border-radius: 50px;
padding-bottom: 0px;
align-items: center;
display: flex;
padding: 8px;
&:hover {
    transform: scale(1.3);
    cursor: pointer;
    color: grey;
    
  }
`