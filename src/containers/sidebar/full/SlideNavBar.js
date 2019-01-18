import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ThemeProvider } from 'styled-components';
import routeThemes from '../../../styles/routeThemes';

import NavBar from './NavBar';

const getTransitionName = (location) => {
  // assign default prevPath on first page load (where there is no history)
  if (!location.state || !routeThemes.hasOwnProperty(location.state.prevPath)) {
    location.state = { prevPath: 'default'};
  }
  // check if current path is defined and assign default path if it is not
  if (!routeThemes.hasOwnProperty(location.pathname)) {
    location.pathname = 'default';
  }
  // prevPath was passed to the Link component in sidebar/full/NavLinks
  const wasWide = routeThemes[location.state.prevPath].wide;
  const willBeWide = routeThemes[location.pathname].wide;
  
  return (wasWide !== willBeWide) ? 'resize' : 'keepSize';
}

export default ({ location }) => (
  <TransitionGroup component={null}>
    <CSSTransition 
      key={location.key}
      classNames={getTransitionName(location)}
      timeout={300}
      exit={false}
      unmountOnExit
    >
      <ThemeProvider theme={routeThemes[location.pathname]}>
        <NavBar />
      </ThemeProvider>
    </CSSTransition>
  </TransitionGroup>
)

