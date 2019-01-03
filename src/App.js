import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import styled, { createGlobalStyle } from 'styled-components';

import themesData from './themes/themesData';
import NavBar from './containers/sidebar/NavBar';

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

const Content = styled.section`
  background: orange;
  margin: 1.4rem 1.2rem 1.4rem 3rem; 
  padding: 2.5rem 2rem;
  border-radius: 0.4rem;
`;

export class App extends Component {
  constructor() {
    super();

    this.state = {
      path: window.location.pathname
    }
    console.log(this.state.path)
    this.updatePath = this.updatePath.bind(this);
  }

  updatePath() {
    const newPath = window.location.pathname;
    if (newPath !== this.state.path) {
      console.log('oldPath: ', this.state.path);
      console.log('newPath: ', newPath);
      this.setState({ path: newPath });
    } 
  }

  getTheme(comp) {
    return themesData[this.state.path][comp] || themesData.default[comp];
  }

  render() {
    return (
      <Root>
        <GlobalStyle />

        <SiteLayout>
          <NavBar theme={this.getTheme('nav')}/>
          <Content>
            <Routes>
              {({ getComponentForPath }) => {
                let Comp = getComponentForPath(window.location.href);
                return <Comp updatePath={this.updatePath} theme={this.getTheme('content')} />
              }}
            </Routes>
          </Content>
        </SiteLayout>

      </Root>
    );
  }
}

export default App;
