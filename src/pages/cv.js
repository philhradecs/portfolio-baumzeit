import React from 'react';
import styled, { css } from 'styled-components';
import { LightTitle, Paragraph } from '../styles/styledPageComponents';

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  &:hover img {
    border: 1px solid rgba(0,0,0,0.6);
    transition: border 100ms ease-out 10ms;
  }
`;
const Image = styled.img`
  display: block;
  max-width: 30%;
  height: auto;
  transform: rotate(22deg);
  box-shadow: 0.1rem 0.1rem 2rem rgba(0,0,0,0.3);
  z-index: 0;
  border: 0px solid transparent;
  border-radius: 0.3rem;

  ${({left}) =>
    left && css`
      z-index: 5;
      transform: rotate(-28deg);
    `
    }
`;
const Anchor = styled.a`
  display: flex;
  justify-content: center;
`;

export default () => (
  <div>
    <LightTitle>CV</LightTitle>
    <Paragraph>
      Click CV to download as PDF →
    </Paragraph>
    <Anchor href='/cv/Philip_Hradecsni_CV.pdf'>
      <ImageWrapper>
        <Image src='/cv/Philip_Hradecsni_CV-1.jpg' left />
        <Image src='/cv/Philip_Hradecsni_CV-2.jpg' right />
      </ImageWrapper>
    </Anchor>
   
  </div>
)