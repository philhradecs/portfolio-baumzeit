import React from 'react';
import styled from 'styled-components';

import LinkedButton from './LinkedButton';

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0.3rem;
  background: var(--body-bg);
  border-radius: 0.3rem;
  position: relative;
`;

const Image = styled.div`
  background: url('${props => props.imgUrl}') center;
  background-size: cover;
  border-radius: 0.3rem;
  height: 100%;
`;

const LinkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0);

  &:hover {
    background: rgba(0,0,0,0.35);
    transition: background 80ms ease-out;

    & .link-button {
      opacity: 0.95;
      transition: opacity 80ms ease-out;
    }
  }
`;

export default ({ url, img, title }) => (
  <Container>
    <Image imgUrl={'/previews/' + img} title={title}/>
    <LinkOverlay>
      <LinkedButton url={url.live} text='Live'/>
      <LinkedButton url={url.code} text='Code' inverse/>
    </LinkOverlay>
  </Container>
)
