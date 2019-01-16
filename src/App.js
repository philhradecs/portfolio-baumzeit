import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';
import WebFont from "webfontloader";

import SlideNavBar from './containers/sidebar/SlideNavBar';
import RoutesContent from './containers/RoutesContent';

if (document !== undefined) {
  WebFont.load({
    google: {
      families: ['Titillium Web:400,600']
    }
  });
}

const GlobalStyle = createGlobalStyle`

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
