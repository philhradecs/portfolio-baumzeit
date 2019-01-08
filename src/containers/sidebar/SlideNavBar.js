import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Location } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import routeThemes from '../../themes/routeThemes';

import NavBar from './NavBar';

const getTransitionName = (location) => {
  if (!location.state || !routeThemes.hasOwnProperty(location.state.prevPath)) {
    location.state = { prevPath: 'default'};
  }
  if (!routeThemes.hasOwnProperty(location.pathname)) {
    location.pathname = 'default';
  }

  const wasWide = routeThemes[location.state.prevPath].nav.wide; // prevPath was passed to state in sidebar/NavLinks component
  const willBeWide = routeThemes[location.pathname].nav.wide;
  
  return (wasWide !== willBeWide) ? 'resize' : '';
}

export default () => (
  <Location>
    {({ location }) => {
      const transitionName = getTransitionName(location);
      return (
      <TransitionGroup>
        <CSSTransition 
          key={location.key}
          classNames={transitionName}
          timeout={3000}
          enter={!!transitionName}
          exit={false}
          unmountOnExit
        >
          <ThemeProvider theme={routeThemes[location.pathname].nav}>
            <NavBar />
          </ThemeProvider>
        </CSSTransition>
      </TransitionGroup>
      )
    }}
  </Location>
)

