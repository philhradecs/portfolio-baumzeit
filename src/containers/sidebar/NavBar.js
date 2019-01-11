import React, { Component } from 'react';
import styled from 'styled-components';

import NavLinks from './NavLinks';

const w = {
  font: '1.4rem',
  widthBar: '22vw',
  indent: '8vw',
  bg: '#222',
  color: '#fafafa',
  widthHeader: '23.3vw'
}

const n = {
  font: '1.2rem',
  widthBar: '10vw',
  indent: '2.5vw',
  bg: 'transparent',
  color: '#222',
  widthHeader: '11.3vw'
}

const NavBar = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;

  display: grid;
  grid-template-rows: 2fr 3fr;

  box-shadow: ${props => props.theme.wide
                  ? '0.2em -0.15em 2.8em -0.4em rgba(30, 30, 30, 0.7)'
                  : ''};

  width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
  background: ${props => props.theme.wide ? w.bg : n.bg};

  &.resize-enter {
    min-width: ${props => !props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => !props.theme.wide ? w.bg : n.bg};

    & #header {
      width: ${props => !props.theme.wide ? w.widthHeader : n.widthHeader}
    }

    & #avatar {
      opacity: 0;
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
    transition: width 200ms ease,
                background-color 200ms ease;

    & #header {
      width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader};
      transition: width 150ms ease;
    }

    & #avatar {
      opacity: 1;
      transition: opacity 200ms ease;
    }

    & .link {
      color: ${props => props.theme.wide ? w.color : n.color};
      padding-left: ${props => props.theme.wide ? w.indent : n.indent};
      font-size: ${props => props.theme.wide ? w.font : n.font};
      transition: color 200ms ease,
                  padding-left 200ms ease,
                  font-size 200ms ease,
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

    border-bottom: ${props => props.theme.wide ? '1px solid #111' : '1px solid transparent'};
    transition: border-color 180ms ease-out;

    & :hover, & :active, & :focus {
      border-bottom: ${props => props.theme.wide ? '1px solid #fafafa' : '1px solid #111'};
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
