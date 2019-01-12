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
      const prevPath = ({ prevPath: location.pathname });
      const isActive = ({ isCurrent }) => isCurrent ? { className: "active link" } : { className: "link" };

      return( 
        <FlexLinks>
          <Link getProps={isActive} to="/" state={prevPath}> Home </Link>
          <Link getProps={isActive} to="/projects" state={prevPath}> Projects </Link>
          <Link getProps={isActive} to="/mind" state={prevPath}> Mind </Link>
          <Link getProps={isActive} to="/cv" state={prevPath}> CV </Link>
          <Link getProps={isActive} to="/contact" state={prevPath}> Contact </Link>
        </FlexLinks>
      )
    }}
  </Location>
);
