import React from 'react';
import { Routes } from 'react-static';
import { Location } from '@reach/router';
import styled, { ThemeProvider } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import routeThemes from '../themes/routeThemes';

const FixedGridArea = styled.div`
  display: grid;
  grid-template-areas: 'fixedArea';
  padding: 1.4rem 1.2rem 1.4rem 3.3rem; 
  height: 100%;
  position: relative;
`;

const ContentWrapper = styled.section`
  grid-area: fixedArea;
  background: ${props => props.theme.bg};
  padding: 2.8rem 3.5rem;
  box-shadow: ${props => props.theme.shadow 
                  ? '-0.15em 0.2em 2.8em -0.4em rgba(30, 30, 30, 0.7)'
                  : ''};
  border-radius: 0.4rem;
  position: absolute;
  width: 100%;
  min-height: 100%;

  &.fade-enter {
    opacity: 0.2;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms linear;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.2;
    transition: opacity 500ms linear;
  }
`;

export default () => (
  <Location>
    {({ location }) => {
      const samePath = location.pathname === location.state.prevPath;
      return (
        <FixedGridArea>
          <ThemeProvider theme={routeThemes[location.pathname].content}>
            <TransitionGroup>
              <CSSTransition 
                key={location.key}
                classNames='fade'
                timeout={500}
                enter={!samePath}
                exit={!samePath}
                unmountOnExit
              >
                <ContentWrapper>
                  <Routes />
                </ContentWrapper>
              </CSSTransition>
            </TransitionGroup>
          </ThemeProvider>
        </FixedGridArea>
      )
    }}
  </Location>
  
)

