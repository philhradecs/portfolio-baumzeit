import React, { Component } from 'react';
import styled from 'styled-components';

import NavLinks from './NavLinks';

const transitionDuration = '510ms';

const w = {
  font: '1.4rem',
  widthBar: '22vw',
  indent: '9vw',
  bg: '#443A31',
  color: '#fafafa',
  widthHeader: '23.3vw',
  underline: '#fafafa'
}

const n = {
  font: '1.2rem',
  widthBar: '10vw',
  indent: '2.5vw',
  bg: 'transparent',
  color: '#222',
  widthHeader: '11.3vw',
  underline: '#222'
}

const NavBar = styled.aside`
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 3fr;

  box-shadow: ${props => props.theme.wide
                  ? '0.1em 0.2em 2.6em -0.3em rgba(30, 30, 30, 0.7)'
                  : ''};

  width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
  background: ${props => props.theme.wide ? w.bg : n.bg};

  &.keepSize-enter {

    & #avatar {
      opacity: 0;
      z-index: 1;
    }
  }

   &.keepSize-enter.keepSize-enter-active {
    
    & #avatar {
      opacity: 1;
      transition: opacity ${transitionDuration} ease-out;
    }
  }

  &.keepSize-enter-done {

    & #avatar {
      opacity: 1;
    }
  }


  &.resize-enter {
    width: ${props => !props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => !props.theme.wide ? w.bg : n.bg};

    & #header {
      width: ${props => !props.theme.wide ? w.widthHeader : n.widthHeader}
    }

    & #avatar {
      opacity: 0;
      z-index: 1;
    }

    & .link {
      color: ${props => !props.theme.wide ? w.color : n.color};
      padding-left: ${props => !props.theme.wide ? w.indent : n.indent};
      font-size: ${props => !props.theme.wide ? w.font : n.font};
    }
    
  }

  &.resize-enter.resize-enter-active {
    width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => props.theme.wide ? w.bg : n.bg};
    transition: width ${transitionDuration} ease,
                background ${transitionDuration} ease-in-out;

    & #header {
      width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader};
      transition: width ${transitionDuration} ease;
    }

    & #avatar {
      opacity: 1;
      transition: opacity ${transitionDuration} ease;
    }

    & .link {
      color: ${props => props.theme.wide ? w.color : n.color};
      padding-left: ${props => props.theme.wide ? w.indent : n.indent};
      font-size: ${props => props.theme.wide ? w.font : n.font};
      transition: color ${transitionDuration} ease,
                  padding-left ${transitionDuration} ease,
                  font-size ${transitionDuration} ease,
    }
  }

  &.resize-enter-done {
    width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => props.theme.wide ? w.bg : n.bg};

    & #header {
      width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader}
    }

    & #avatar {
      opacity: 1;
    }

    & .link  {
      color: ${props => props.theme.wide ? w.color : n.color};
      padding-left: ${props => props.theme.wide ? w.indent : n.indent};
      font-size: ${props => props.theme.wide ? w.font : n.font};
    }
  }
`;

const SideHeader = styled.div`
  margin-top: 10vh;
  min-height: 10rem;
  width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader};
  border-radius: 0 0.35em 0.35em 0;
  overflow: hidden;
`;

const Avatar = styled.div`
  background: url("${props => props.theme.navImg}");
  background-size: cover;
  background-position: right center;
  height: 100%;
`;

const LinkWrapper = styled.div`
    margin: 6vh 0 8vh 0;
    min-height: 10rem;

  & .link {
    text-decoration: none;
    outline: 0;
    padding: 0.3em 0.3em 0.05em 0;
    padding-left: ${props => props.theme.wide ? w.indent : n.indent};
    color: ${props => props.theme.wide ? w.color : n.color};
    font-size: ${props => props.theme.wide ? w.font : n.font};

    border-bottom: ${props => props.theme.wide ? '1px solid #222' : '1px solid transparent'};
    transition: border-color 180ms ease-out;

    & :hover, & :focus {
      border-bottom: ${props => props.theme.wide ? `1px solid ${w.underline}` : `1px solid ${n.underline}`};
    }
    &.active {
      border-bottom: ${props => props.theme.wide ? `1px solid ${w.underline}` : `1px solid ${n.underline}`};
      pointer-events: none;
    }
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
        <SideHeader id="header">
          <Avatar id="avatar"/>
        </SideHeader>
        <LinkWrapper>
          <NavLinks />
        </LinkWrapper>
      </NavBar>
    )
  }
}

export default NavComp;
