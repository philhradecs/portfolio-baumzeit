import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Location } from '@reach/router';
import Media from 'react-media';

import ProvideNavBar from './containers/sidebar/ProvideNavBar';
import TopNavBar from './containers/sidebar/top/TopNavBar';
import SlideNavBar from './containers/sidebar/full/SlideNavBar';
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

const DesktopLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

  height: 100vh;
`;

const MobileLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem auto;
  height: 100vh;  
`;

class App extends Component {

  componentDidMount() {
    document.title = 'Portfolio Baumzeit';
  }

  render() {
    return (
      <Root>
        <GlobalStyle />
        <Location>
          {({ location }) => (
            <Media query="(min-width: 992px)">
              {matches =>
                matches ? ( 
                  <DesktopLayout>
                    <SlideNavBar location={location}/>
                    <RoutesContent />
                  </DesktopLayout> 
                ) : (
                  <MobileLayout>
                    <TopNavBar location={location}/>
                    <RoutesContent isMobile />
                 </MobileLayout>
                )
              }
            </Media>
          )}
        </Location>
      </Root>
    );
  }
}

export default App;
        