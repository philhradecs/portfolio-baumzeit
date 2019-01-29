import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';
import { Location } from '@reach/router';
import Media from 'react-media';

import TopNavBar from './containers/sidebar/top/TopNavBar';
import SlideNavBar from './containers/sidebar/full/SlideNavBar';
import RoutesContent from './containers/RoutesContent';

require('typeface-titillium-web');
require('typeface-roboto-slab');
require('typeface-nunito');
// 
// if (typeof window !== 'undefined') {
//   loadWebFonts();
// }

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

const DesktopLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

const MobileLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3.5rem auto;
  height: 100vh;  
`;

class App extends Component {

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
        