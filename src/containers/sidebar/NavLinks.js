import React from 'react';
import styled, { css } from 'styled-components';
import HistoryLink from './HistoryLink';

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

export default ({ row }) => {
  const isActive = ({ isCurrent }) => isCurrent ? { className: "active link" } : { className: "link" };
  return( 
    <FlexLinks row={row}>
      <HistoryLink getProps={isActive} to="/"> Home </HistoryLink>
      <HistoryLink getProps={isActive} to="/projects"> Projects </HistoryLink>
      <HistoryLink getProps={isActive} to="/mind"> Mind </HistoryLink>
      <HistoryLink getProps={isActive} to="/cv"> CV </HistoryLink>
      <HistoryLink getProps={isActive} to="/contact"> Contact </HistoryLink>
    </FlexLinks>
  )
}
