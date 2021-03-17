import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  height: 10vh;
  background: #000;
  display: flex;
  align-items: center;
`;

export const SocialMediaSection = styled.section`
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcons = styled.div`
  padding: 0.5rem;
  font-size: 1.5rem;
`;

export const SocialIconLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-right: 0.5rem;
`;

export const FooterCopyrightSection = styled.section`
  width: 100%;
`;

export const FooterCopyrightWrapper = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
