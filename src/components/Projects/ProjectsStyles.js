import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 10px 10px 0px 0px;
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: start center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 20px;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  padding: 1rem;
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #9cc9e3;
  font-weight: bold;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 30px;
  color: black;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
`;

export const ExternalLinks = styled.a`
color: white;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
border-radius: 15px;
transition: 0.5s ease;
font-weight: bold;
&:hover{
  cursor: pointer;
  background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 1rem;
`
export const Tag = styled.li`
border-radius: 10px;
padding: 0.5rem;
color: black;
font-size: 1.5rem;
background-color: #dee2ff;

`