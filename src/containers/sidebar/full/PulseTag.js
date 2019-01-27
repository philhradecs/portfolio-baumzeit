import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
    from {
    }
    50% {
      color: #F28A0D;
      font-weight: 400;
    }
    to {
    }
`
const pulsePaths = ['mind', 'contact']

const Anchor = styled.a`
  font-family: 'Nunito';
  position: absolute;
  top: 0.5rem;
  left: 0.8rem;
  text-decoration: none;
  outline: 0;

  & #info {
    margin-left: 0.5rem;
    color: ${props => props.theme.wide ? 'rgba(255,255,255, 0.6)' : 'rgba(0,0,0, 0.6)'};
    font-size: 0.8rem;
    opacity: 0;
  }

  &:hover #info {
    opacity: 1;
    transition: opacity 80ms ease-out;
  }
`;

const PulseTag = styled.span`
  font-size: 0.8rem;
  z-index: 10;
  color: ${props => props.theme.wide ? 'rgba(255,255,255, 0.3)' : 'rgba(0,0,0, 0.3)'};
  ${props => pulsePaths.includes(props.theme.pathname) ? css`animation: ${pulse} 0.8s 1 ease-in-out 6s` : css`animation: '' `};
`;

class Tag extends Component {
  render() {
    return (
      <Anchor href='https://github.com/baumzeit/portfolio-baumzeit/' target='_blank' rel='noopener noreferrer'>
        <PulseTag>{this.props.children}</PulseTag>
        <span id='info'>→ view repo</span>
      </Anchor>
    );
  }
}

export default Tag;
