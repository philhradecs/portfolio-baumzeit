import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';

import ProvideNavBar from './containers/sidebar/ProvideNavBar';
import RoutesContent from './containers/RoutesContent';
import loadWebFonts from './loadWebFonts';

if (typeof window !== 'undefined') {
  loadWebFonts();
}

const GlobalStyle = createGlobalStyle`

  .wf-loading * {
    opacity: 0;
  }

  .wf-active *, 
  .wf-inactive * {
    transition: opacity 400ms ease-out;  
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
  }

  body {

    --body-bg: #fafafa;
    background: var(--body-bg);
    font-family: 'Titillium Web';

  }
`;

const SiteLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  height: 100vh;

  /*@media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4rem auto;
  }*/  
`;

class App extends Component {
    
  render() {
    return (
      <Root>
        <GlobalStyle />
        <SiteLayout>
          <ProvideNavBar singleColumn={false} />
          <RoutesContent singleColumn={false} />
        </SiteLayout>
      </Root>
    );
  }
}

export default App