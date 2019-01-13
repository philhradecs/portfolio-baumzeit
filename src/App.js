import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';

import SlideNavBar from './containers/sidebar/SlideNavBar';
import RoutesContent from './containers/RoutesContent';

require('typeface-titillium-web');


const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');
    font-family: 'Titillium Web', sans-serif;

    background: #fafafa;

    h1 {
      color: #fafafa;
    }

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
