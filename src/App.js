import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';
import withSizes from 'react-sizes';

import ProvideNavBar from './containers/sidebar/ProvideNavBar';
import RoutesContent from './containers/RoutesContent';
import loadWebFonts from './loadWebFonts';

if (typeof window !== 'undefined') {
  loadWebFonts();
}

const GlobalStyle = createGlobalStyle`

  .wf-loading {
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
  grid-template-columns: ${props => props.singleColumn ? '1fr' : 'auto 1fr'};
`;

@withSizes(({ width }) => ({ singleColumn: width <= 768 }))

class App extends Component {
  render() {
    return (
      <Root>
        <GlobalStyle />
        <SiteLayout singleColumn={this.props.singleColumn}>
          <ProvideNavBar singleColumn={this.props.singleColumn} />
          <RoutesContent singleColumn={this.props.singleColumn} />
        </SiteLayout>
      </Root>
    );
  }
}

export default App;
