import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import NavLinks from './NavLinks';

const NavBar = styled.aside`
  --header-height: 35vh;
  --bar-width: ${props => props.theme.wide ? '25vw' : '12vw'};
  
  width: var(--bar-width);
  background: ${props => props.theme.wide ? '#222': 'transparent'};
  
  position: sticky;
  overflow: hidden;
  top: 0;
  height: 100vh;

  &.resize-enter {
    width: ${props => props.theme.wide ? '12vw' : '25vw'};
  }
  &.resize-enter.resize-enter-active {
    width: ${props => props.theme.wide ? '25vw' : '12vw'};
    transition: width 3000ms ease;
  }
`;

const SideHeader = styled.div`
  position: fixed;
  top: 8vh;
  height: var(--header-height);
  width: calc(var(--bar-width) + 1.5vw);
  border-radius: 0 0.3em 0.3em 0;
  overflow: hidden;
`;

const Avatar = styled.div`
  background: url("${props => props.theme.navImg}");
  background-size: cover;
  background-position: center;
  height: 100%;
`;

const LinkWrapper = styled.div`
  margin-top: calc(var(--header-height) + 16vh);
  height: 38vh;

  a {
    font-size: 1.2em;
    text-decoration: none;
    padding: 0.3em 0.2em 0.1em 0;
    padding-left: calc(var(--bar-width) / 4);
    border-bottom: 1px solid transparent;
    color: #222;
    outline: 0;
    transition: border-color 140ms ease-out;

    & :hover, & :active, & :focus {
      border-bottom: 1px solid black;
    }

    ${({theme})  =>
      theme.wide &&
      css`
        font-size: 1.4em;
        white-space: no-wrap;
        padding-left: calc(var(--bar-width) / 2);
        border-bottom: 1px solid black;
        color: #fafafa;
        & :hover, & :active, & :focus {
          border-bottom: 1px solid white;
        }
    `};
  }
`;

class NavComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <NavBar>
        <SideHeader>
          <Avatar />
        </SideHeader>
        <LinkWrapper>
          <NavLinks />
        </LinkWrapper>
      </NavBar>
    )
  }
}

export default NavComp;

/*export default ({ theme: { wide, navImg }}) => (
  <NavBar wide={wide}>
    <SideHeader>
      <Image src={navImg} alt=''/>
    </SideHeader>
    <LinkWrapper wide={wide}>
      <NavLinks />
    </LinkWrapper>
  </NavBar>
);*/
