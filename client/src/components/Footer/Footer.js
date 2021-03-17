import React from 'react';
import {
  FooterContainer,
  SocialMediaSection,
  SocialMediaWrapper,
  SocialIcons,
  SocialIconLink,
  FooterCopyrightSection,
  FooterCopyrightWrapper,
} from './Footer.elements';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaLinkedin,
} from 'react-icons/fa';
import { Container } from '../../globalStyles';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Container>
          <SocialMediaSection>
            <SocialMediaWrapper>
              <SocialIcons>
                <SocialIconLink to="/" target="_blank">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank">
                  <FaTwitch />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrapper>
          </SocialMediaSection>
          <FooterCopyrightSection>
            <FooterCopyrightWrapper>
              Made with React and Redux. Thanawat©2021
            </FooterCopyrightWrapper>
          </FooterCopyrightSection>
        </Container>
      </FooterContainer>
    </>
  );
};

export default Footer;
