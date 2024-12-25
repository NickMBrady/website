import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';
import Card from './UpdateCard';
import { Nav, NavLogoSection, LogoBox, Logo, NBTitle, NavLinkSection, LinkBox } from './NavBarComponent';
import { BubbleDiv, GithubBubble, KeywordBubble } from './Bubbles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SampleNextArrow, SamplePrevArrow } from './SliderFunctions';
import { SliderContainer, Main, ContentContainer, BoldSubHeading, BoldTitle, HCenter, FullHeightImageSliderDiv, SubHeading, ImageSliderDiv, SliderImg2, Paragraph, Image } from './ProjectComponents';
import logoImg from "/assets/nb-logo.png";
import orthoticImg from "/assets/orthotic/moldingGif.gif";

import generationImg from "/assets/orthoticGen/generationGif.gif";
import modelImg from "/assets/orthoticGen/3D models.png";
import handshotImg from "/assets/orthoticGen/handShots.png";
import outlineImg from "/assets/orthoticGen/foot outline.png";

import accountGif from "/assets/herd/account.gif";
import artistGif from "/assets/herd/artist.gif";
import bookmarkedImg from "/assets/herd/bookmarked.png";
import compareImg from "/assets/herd/compare.png";
import daily5Gif from "/assets/herd/daily5.gif";
import followingGif from "/assets/herd/following.gif";
import gutImg from "/assets/herd/gut.png";
import homeImg from "/assets/herd/home.png";
import loginImg from "/assets/herd/login.png";
import searchGif from "/assets/herd/search.gif";
import settingsImg from "/assets/herd/settings.png";
import songGIf from "/assets/herd/song.gif";
import tinderGif from "/assets/herd/tinder.gif";

export default function OrthoticProstheticPage() {

  const settingsImage = {
    dots: true,
    adaptiveHeight: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <GlobalStyle />
      <Nav>
        <NavLogoSection>
          <LogoBox>
            <a href="/portfolio/"><Logo src={logoImg} alt="Logo" /> </a>
            <NBTitle>Nick Brady</NBTitle>
          </LogoBox>
        </NavLogoSection>
        <WideNavLinkSection>
          <LinkBox>
            <a href="https://www.linkedin.com/in/nickmbrady" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
            <a href="mailto:nickbrady8444@example.com">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
            <a href="https://github.com/nickmbrady" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </LinkBox>
        </WideNavLinkSection>
      </Nav>
      <Main>
        <ContentContainer>
          <BoldTitle>Herd: Music App</BoldTitle>
          <Paragraph>
            I worked with a client to write the complete front end for an upcoming mobile app Herd. The design includes Home, Search, Account, Ranking, Following, Introduction, and Settings screens. The app is connected through a Supabase backend.
          </Paragraph>
          <BubbleDiv>
            <KeywordBubble>Software Development</KeywordBubble>
            <KeywordBubble>Graphical User Interface</KeywordBubble>
            <KeywordBubble>Javascript</KeywordBubble>
            <KeywordBubble>React Native</KeywordBubble>
          </BubbleDiv>
          {/* <HCenter> */}
          <SliderContainer style={{ paddingTop: 30, maxWidth: '40vh', margin: '0 auto' }}>
            <div className="slider-container">
              <Slider {...settingsImage}>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={accountGif} alt="Account" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={tinderGif} alt="Tinder" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={artistGif} alt="Artist" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={songGIf} alt="Song" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={compareImg} alt="Compare" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={daily5Gif} alt="Daily 5" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={gutImg} alt="Gut" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={homeImg} alt="Home" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={loginImg} alt="Login" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={searchGif} alt="Search" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={bookmarkedImg} alt="Bookmarked" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={followingGif} alt="Following" />
                </FullHeightImageSliderDiv>
                <FullHeightImageSliderDiv>
                  <SliderImg2 src={settingsImg} alt="Settings" />
                </FullHeightImageSliderDiv>
              </Slider>
            </div>
          </SliderContainer>
          { }
        </ContentContainer>
      </Main>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --light-gray: #b7b7b7;
    --dividing-line: #303f4d;
    --background: #f5f5f5;
  }

  h1, h2, h3, a, p, span {
    font-family: "Lexend Exa", sans-serif;
    font-weight: 400;
    color: var(--light-gray);
  }

  a {
    font-size: 10pt;
    text-decoration: none;
    text-transform: uppercase;
  }

  strong {
    font-weight: 400;
  }
  
`;

const WideNavLinkSection = styled(NavLinkSection)`
  flex-basis: 100%;
`