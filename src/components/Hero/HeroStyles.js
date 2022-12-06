import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Img = styled.img`
  width:65%;
  height:65%;
  overflow: hidden;
  padding-right: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width:50%;
    height:50%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width:50%;
    height:50%;
  }
  


`


