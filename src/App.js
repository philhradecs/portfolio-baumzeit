import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Location } from '@reach/router';
import withSizes from 'react-sizes';

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
    this.checkLayout();
  }

  checkLayout() {
    if (window.innerWidth < 768 && !this.props.isMobile) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <Root>
        <GlobalStyle />
        <Location>
          {({ location }) => (
            this.props.isMobile
              ? <MobileLayout>
                  <TopNavBar />
                  <RoutesContent isMobile />
                </MobileLayout>
              : <DesktopLayout>
                  <SlideNavBar location={location}/>
                  <RoutesContent />
                </DesktopLayout>
          )}
        </Location>
      </Root>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: !width ? false : (width < 768)
})

export default withSizes(mapSizesToProps)(App);