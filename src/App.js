import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';

import SlideNavBar from './containers/sidebar/SlideNavBar';
import RoutesContent from './containers/RoutesContent';
import loadWebFonts from './loadWebFonts';

if (typeof window !== 'undefined') {
  loadWebFonts();
}

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  .wf-active {
    font-family: 'Titillium Web';
  }

  body, html {
    margin: 0;
  }

  body {
    --body-bg: #fafafa;
    background: var(--body-bg);
  }
`;

const SiteLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <Root>
        <GlobalStyle />
        <SiteLayout>
          <SlideNavBar />
          <RoutesContent />
        </SiteLayout>
      </Root>
    );
  }
}

export default App;
