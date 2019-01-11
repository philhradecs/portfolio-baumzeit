import React from 'react';
import { Link, Location } from '@reach/router';
import styled from 'styled-components';

const FlexLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`

export default () => (
  <Location>
    {({ location }) => {
      const getPathObj = () => ({ prevPath: location.pathname });
      return (
        <FlexLinks>
          <Link className="link" to="/" state={getPathObj()}>Home</Link>
          <Link className="link" to="/projects" state={getPathObj()}>Projects</Link>
          <Link className="link" to="/mind" state={getPathObj()}>Mind</Link>
          <Link className="link" to="/cv" state={getPathObj()}>CV</Link>
          <Link className="link" to="/contact" state={getPathObj()}>Contact</Link>
        </FlexLinks>
      )
    }}
  </Location>
);
