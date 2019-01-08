import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';

import SlideNavBar from './containers/sidebar/SlideNavBar';
import RoutesContent from './containers/RoutesContent';


const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body, html {
    background: #fafafa;
    min-height: 100%;
    margin: 0;
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    padding: 0;
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
