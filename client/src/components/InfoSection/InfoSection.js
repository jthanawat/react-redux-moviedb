import React from 'react';
import image from '../../images/image1.jpg';
import { Button } from '../../globalStyles';
import {
  InfoSectionContainer,
  InfoContent,
  InfoText,
  CoverImage,
} from './InfoSection.elements';

const InfoSection = () => {
  return (
    <>
      <InfoSectionContainer>
        <InfoContent>
          <InfoText>Take, Watch, Enjoy</InfoText>
          <Button $fontBig>Discover</Button>
        </InfoContent>
        <CoverImage src={image} />
      </InfoSectionContainer>
    </>
  );
};

export default InfoSection;
