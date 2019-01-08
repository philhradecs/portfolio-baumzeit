import React from 'react';
import { Routes } from 'react-static';
import { Location } from '@reach/router';
import styled, { ThemeProvider } from 'styled-components';

import routeThemes from '../themes/routeThemes';

const ContentWrapper = styled.section`
  background: ${props => props.theme.bg};
  margin: 1.4rem 1.2rem 1.4rem 3rem; 
  padding: 2.5rem 2rem;
  border-radius: 0.4rem;
`;

export default () => (
  <Location>
    {({ location }) => (
      <ThemeProvider theme={routeThemes[location.pathname].content}>
        <ContentWrapper>
          <Routes />
        </ContentWrapper>
      </ThemeProvider>
    )}
  </Location>
  
)

