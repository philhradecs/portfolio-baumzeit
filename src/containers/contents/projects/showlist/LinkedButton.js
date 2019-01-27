import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  text-decoration: none;
  outline: 0;
`;

const Button = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0;
  margin: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  border: 1px solid transparent;
  color: ${props => props.inverse ? 'var(--body-bg)' : '#333'};
  background: ${props => props.inverse ? '#333' : 'var(--body-bg)'};

  &:hover {
    border-color: ${props => props.inverse ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.7)'};
    transition: border-color 220ms ease-out;
  }
`;

export default ({ url, text, inverse }) => (
  <Anchor href={url} target='_blank' rel='noopener noreferrer'>
     <Button className='link-button' inverse={inverse}>
      {text}
    </Button>
  </Anchor>
)

