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
  padding: ${props => props.singleColumn ? '0' : '3.5vh 2.5vw 3vh 4.4vw'};
  min-height: ${props => props.singleColumn ? '100%' : '100vh'};
  overflow: auto;
  overflow-y: overlay;
  position: relative;
`;

const ContentWrapper = styled.section`
  grid-area: fixedArea;
  background: 'transparent';
  padding: 0 3vw;
  box-shadow: '';

  ${({theme}) =>
    theme.pageView && css`
      background: ${theme.contentBg};
      box-shadow: 0 0.1em 1.3em -0.3em rgba(30, 30, 30, 0.7);
    `  
  }

  border-radius: 0.4rem;
  top: 0;
  width: 100%;

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

export default ({ singleColumn }) => (
  <Location>
    {({ location }) => (
      <FixedGridArea singleColumn={singleColumn}>
        <TransitionGroup component={null}>
          <CSSTransition 
            key={location.key}
            classNames='fade'
            timeout={transitionDuration}
            unmountOnExit
          >
            <ThemeProvider theme={() => { const theme = routeThemes[location.pathname] || routeThemes.default;
                                          return { singleColumn, ...theme }}}>
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

