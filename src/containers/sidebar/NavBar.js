import React, { Component } from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import SocialIconsBar from './SocialIconsBar';

const transitionDuration = '300ms';

const w = {
  font: '1.4rem',
  widthBar: '22vw',
  indent: '9vw',
  bg: '#443A31',
  color: '#fafafa',
  widthHeader: '23.3vw',
  underline: 'palevioletred',
  shadow: '0 0.15em 1.6em -0.3em rgba(30, 30, 30, 0.7)',
  sizeIcon: '1.4rem'
}

const n = {
  font: '1.1rem',
  widthBar: '10vw',
  indent: '2.5vw',
  bg: 'transparent',
  color: '#222',
  widthHeader: '11.3vw',
  underline: 'palevioletred',
  shadow: '0 0.15em 1.6em -0.3em transparent',
  sizeIcon: '1.1rem'
}

const NavBar = styled.aside`
  min-height: 100vh;
  min-width: ${props => props.theme.wide ? '10rem' : '3rem'}; 
  display: grid;
  grid-template-rows: auto 2fr 3fr;
  position: relative;
  width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
  background: ${props => props.theme.wide ? w.bg : n.bg};

  &.keepSize-enter {

    & #avatar {
      opacity: 0.01;
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
    box-shadow: ${props => !props.theme.wide ? w.shadow : n.shadow};
    
    & .socialIcon {
      font-size: ${props => !props.theme.wide ? w.sizeIcon : n.sizeIcon};
    }

    & #header {
      width: ${props => !props.theme.wide ? w.widthHeader : n.widthHeader}
    }

    & #avatar {
      opacity: 0.01;
    }

    & .link {
      color: ${props => !props.theme.wide ? w.color : n.color};
      border-bottom: ${props => !props.theme.wide ? '1px solid #222' : '1px solid transparent'};
      padding-left: ${props => !props.theme.wide ? w.indent : n.indent};
      font-size: ${props => !props.theme.wide ? w.font : n.font};
    }
    
  }

  &.resize-enter.resize-enter-active {
    width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => props.theme.wide ? w.bg : n.bg};
    box-shadow: ${props => props.theme.wide ? w.shadow : n.shadow};
    transition: width ${transitionDuration} ease,
                background ${transitionDuration} ease,
                box-shadow ${transitionDuration} ease;

    & .socialIcon {
      font-size: ${props => props.theme.wide ? w.sizeIcon : n.sizeIcon};
      transition: font-size ${transitionDuration} ease;
    }           

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
                  font-size ${transitionDuration} ease;
    }
  }

  &.resize-enter-done {
    width: ${props => props.theme.wide ? w.widthBar : n.widthBar};
    background: ${props => props.theme.wide ? w.bg : n.bg};
    box-shadow: ${props => props.theme.wide ? w.shadow : n.shadow};


    & .socialIcon {
      font-size: ${props => props.theme.wide ? w.sizeIcon : n.sizeIcon};
    }

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
  margin-top: 5vh;
  min-width: ${props => props.theme.wide ? '11rem' : '4.5rem'}; 
  width: ${props => props.theme.wide ? w.widthHeader : n.widthHeader};
  border-radius: 0 0.35em 0.35em 0;
  box-shadow: 0 0.15em 1.6em -0.5em rgba(30, 30, 30, 0.7);
  overflow: hidden;
  position: relative;
`;

const Avatar = styled.div`
  background: url("${props => props.theme.navImg}");
  background-size: cover;
  background-position: right center;
  height: 100%;
`;

const LinkWrapper = styled.div`
    margin: 4vh 0 8vh 0;
    min-height: 10rem;

  & .link {
    flex: 1;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    outline: 0;
    padding: 0.3rem 0.3rem 0.1rem 0;
    padding-left: ${props => props.theme.wide ? w.indent : n.indent};
    color: ${props => props.theme.wide ? w.color : n.color};
    font-size: ${props => props.theme.wide ? w.font : n.font};
    transition: border-color 140ms ease;
    border-bottom: ${props => props.theme.wide ? '1px solid #222' : '1px solid transparent'};

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
        <SocialIconsBar />
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
