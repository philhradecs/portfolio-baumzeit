import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ThemeProvider } from 'styled-components';
import getThemeForPath from '../../../styles/getThemeForPath';

import NavBar from './NavBar';

const getTransitionName = (location) => {
  // deal with the case where prevPath is not defined, e.g on first page load
  if (!location.state) {
    return 'keepSize';
  }
  // prevPath was passed to the Link component in sidebar/full/NavLinks
  const wasWide = getThemeForPath(location.state.prevPath).wide;
  const willBeWide = getThemeForPath(location.pathname).wide;
  
  return (wasWide !== willBeWide) ? 'resize' : 'keepSize';
}

export default ({ location }) => (
  <TransitionGroup>
    <CSSTransition 
      key={location.key}
      classNames={getTransitionName(location)}
      timeout={250}
      exit={false}
      unmountOnExit
    >
      <ThemeProvider theme={getThemeForPath(location.pathname)}>
        <NavBar />
      </ThemeProvider>
    </CSSTransition>
  </TransitionGroup>
)

