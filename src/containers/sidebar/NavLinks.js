import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const FlexLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`

export default () => (
  <FlexLinks>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/mind">Mind</Link>
    <Link to="/cv">CV</Link>
    <Link to="/contact">Contact</Link>
  </FlexLinks>
);
