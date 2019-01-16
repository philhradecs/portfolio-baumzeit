import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0.3rem;
  background: var(--body-bg);
  border-radius: 0.3rem;
  position: relative;
`;

const Image = styled.div`
  background: url('${props => props.imgUrl}') left center;
  background-size: cover;
  border-radius: 0.3rem;
  height: 100%;
`;

const LinkOverlay = styled.a`
  text-decoration: none;
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
    background: rgba(0,0,0,0.25);
    transition: background 80ms ease-out;

    & #live-button {
      opacity: 0.9;
      transition: opacity 80ms ease-out;
    }
  }
`;

const LiveButton = styled.div`
  color: #333;
  font-size: 1rem;
  opacity: 0;
  padding: 0.5rem 0.7rem;
  background: var(--body-bg);
  border-radius: 0.2rem;
`;

export default ({ url, img, title }) => (
  <Container>
    <Image imgUrl={'/previews/' + img} title={title}/>
    <LinkOverlay href={url} target='_blank' rel='noopener noreferrer'>
      <LiveButton id='live-button'>
        View Live
      </LiveButton> 
    </LinkOverlay>
  </Container>
)
