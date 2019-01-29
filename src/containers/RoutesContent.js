import React from 'react';
import { Routes } from 'react-static';
import { Location } from '@reach/router';
import styled, { ThemeProvider, css } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import routeThemes from '../styles/routeThemes';

const transitionDuration = 250;

const FixedGridArea = styled.div`
  display: grid;
  grid-template-areas: 'fixedArea';
  padding: ${props => props.isMobile ? '0' : '3.5vh 2.5vw 3.5vh 4.4vw'};
  height: ${props => props.isMobile ? '100%' : '100vh'};
  overflow: auto;
  overflow-y: overlay;
  position: relative;
`;

const ContentWrapper = styled.section`
  grid-area: fixedArea;
  background: 'transparent';
  padding: 0 3vw;
  box-shadow: '';
  border-radius: 0.4rem;
  width: 100%;

  ${({theme}) =>
    theme.pageView && css`
      background: ${theme.contentBg};
      box-shadow: 0 0.1em 0.9em -0.45em rgba(0, 0, 0, 0.8);
    `  
  }

  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity ${transitionDuration}ms linear;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity ${transitionDuration}ms linear;
  }
`;

export default ({ isMobile }) => (
  <Location>
    {({ location }) => (
      <FixedGridArea isMobile={isMobile}>
        <TransitionGroup component={null}>
          <CSSTransition 
            key={location.key}
            classNames='fade'
            timeout={transitionDuration}
            unmountOnExit
          >
            <ThemeProvider theme={() => { const theme = routeThemes[location.pathname] || routeThemes.default;
                                          return { isMobile, ...theme }}}>
              <ContentWrapper>
                <Routes />
              </ContentWrapper>
            </ThemeProvider>
          </CSSTransition>
        </TransitionGroup>
      </FixedGridArea>
    )}
  </Location>
  
)

