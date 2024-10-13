import 'react';
import styled from 'styled-components';

export const NavSections = styled.div`
  padding: 4rem 2rem;
  border-left: 1px solid var(--dividing-line);
  box-sizing: border-box;


  @media (max-width: 800px) {
    padding: 2rem 0.5rem;
  }
  @media (max-width: 576px) {
    padding: 1rem 0.25rem;
  }
`
export const NavLogoSection = styled(NavSections)`
  flex-basis: calc(100%/3);
  
  border-left: 0px;
  border-top: 0px;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

export const NavLinkSection = styled(NavSections)`
  display: flex;
  flex-basis: calc(100% / 3);
  align-items: center;
  justify-content: center;
`;

export const NavAboutSection = styled(NavSections)`
  display: flex;
  flex-grow: 1; 
  align-items: center;
  justify-content: center;
  cursor: pointer;  /* Change cursor to hand icon on hover */
  
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #a2aebe;  /* Color on hover */

    a {
      color: #1a2937;  /* Text color on hover */
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--dividing-line) ;
`

export const NBTitle = styled.p`
  padding-left: 20px;

  @media (max-width: 576px) {
    display: none;
  }
`
export const LogoBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 800px) {
    transform: scale(0.75);
  }
  @media (max-width: 576px) {
    transform: scale(0.5);
  }
`

export const LinkBox = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 1200px) {
    gap: 4rem;
  }

  @media (max-width: 992px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 576px) {
    gap: 1rem;
  }
`

export const Logo = styled.img`
  // width: 50px;
  // height:auto;
  // margin-right: 15px;
  
`

