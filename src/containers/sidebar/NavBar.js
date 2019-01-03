import React from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';

import NavLinks from './NavLinks';

const NavBar = styled.aside`
  --bar-width: ${props => props.isWide ? '25vw' : '12vw'};
  --header-height: 35vh;

  position: sticky;
  overflow: hidden;
  top: 0;
  height: 100vh;
  width: var(--bar-width);
  background: ${props => props.isWide ? '#252a2e' : 'transparent' };
  transition: width 150ms ease;
`;

const SideHeader = styled.div`
  position: fixed;
  top: 8vh;
  height: var(--header-height);
  width: calc(var(--bar-width) + 1.5vw);
  border-radius: 0 0.3em 0.3em 0;
  overflow: hidden;
`;

const Image = styled.img`
`;

const LinkWrapper = styled.div`
  margin-top: calc(var(--header-height) + 16vh);
  height: 38vh;

  a {
    font-size: ${props => props.isWide ? '1.4em' : '1.2em' };
    text-decoration: none;
    padding: 0.3em 0.2em 0.1em 0;
    padding-left: calc(var(--bar-width) / ${props => props.isWide ? 2.5 : 4 });
    border-bottom: ${props => props.isWide ? '1px solid black' : '1px solid transparent' };
    color: ${props => props.isWide ? '#fafafa' : '#222' };
    transition: border-color 120ms ease;

    & :hover, & :active, & :focus {
      outline: 0;
      border-bottom: ${props => props.isWide ? '1px solid white' : '1px solid black' };
    }
  }
`;

export default ({ theme: { isWide, imgUrl } }) => (
  <NavBar isWide={isWide}>
    <SideHeader>
      <Image src={imgUrl} alt=''/>
    </SideHeader>
    <LinkWrapper isWide={isWide}>
      <NavLinks />
    </LinkWrapper>
  </NavBar>
);
