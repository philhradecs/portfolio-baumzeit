import React from 'react';
import { Routes } from 'react-static';
import { Location } from '@reach/router';
import styled, { ThemeProvider } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import routeThemes from '../themes/routeThemes';

const transitionDuration = '240ms';

const FixedGridArea = styled.div`
  display: grid;
  grid-template-areas: 'fixedArea';
  padding: 1.4rem 1.2rem 1.4rem 3.3rem; 
  min-height: 100vh;
  overflow: auto;
  position: relative;
`;

const ContentWrapper = styled.section`
  grid-area: fixedArea;
  background: ${props => props.theme.contentBg};
  padding: 2.8rem 3.5rem;
  box-shadow: ${props => !props.theme.wide 
                  ? '-0.1em 0.2em 2.6em -0.3em rgba(30, 30, 30, 0.7)'
                  : ''};
  border-radius: 0.4rem;
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100%;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity ${transitionDuration} linear;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity ${transitionDuration} linear;
  }
`;

export default () => (
  <Location>
    {({ location }) => (
      <FixedGridArea>
        <TransitionGroup>
          <CSSTransition 
            key={location.key}
            classNames='fade'
            timeout={400}
            unmountOnExit
          >
            <ThemeProvider theme={routeThemes[location.pathname] || routeThemes.default}>
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

