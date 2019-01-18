import React from 'react';
import { Link, Location } from '@reach/router';
import styled, { css } from 'styled-components';

const FlexLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  & .link {
    text-decoration: none;
    outline: 0;
  }

  ${({ row }) => (
    row && css`
    flex-direction: row;
    align-items: center;
    `
  )}
`;

export default (props) => (
  <Location>
    {({ location }) => {
      const prevPath = ({ prevPath: location.pathname });
      const isActive = ({ isCurrent }) => isCurrent ? { className: "active link" } : { className: "link" };
      return( 
        <FlexLinks row={props.row}>
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
