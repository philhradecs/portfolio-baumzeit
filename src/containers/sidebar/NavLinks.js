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

const getPathObj = () => ({ prevPath: window.location.pathname })

export default () => (
  <FlexLinks>
    <Link to="/" state={getPathObj()}>Home</Link>
    <Link to="/projects" state={getPathObj()}>Projects</Link>
    <Link to="/mind" state={getPathObj()}>Mind</Link>
    <Link to="/cv" state={getPathObj()}>CV</Link>
    <Link to="/contact" state={getPathObj()}>Contact</Link>
  </FlexLinks>
);
