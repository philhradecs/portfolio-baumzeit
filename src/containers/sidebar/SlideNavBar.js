import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Location } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import routeThemes from '../../themes/routeThemes';

import NavBar from './NavBar';

const shouldTransition = (location) => {
  // assign default prevPath on first page load (where there is no history)
  if (!location.state || !routeThemes.hasOwnProperty(location.state.prevPath)) {
    location.state = { prevPath: 'default'};
  }
  // check if current path is defined and assign default path if it is not
  if (!routeThemes.hasOwnProperty(location.pathname)) {
    location.pathname = 'default';
  }
  // prevPath was passed to the Link component in sidebar/NavLinks
  const wasWide = routeThemes[location.state.prevPath].nav.wide;
  const willBeWide = routeThemes[location.pathname].nav.wide;
  
  return (wasWide !== willBeWide) ? 'resize' : '';
}

export default () => (
  <Location>
    {({ location }) => {
      const className = shouldTransition(location);
      return (
        <TransitionGroup>
          <CSSTransition 
            key={location.key}
            classNames={className}
            timeout={200}
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

