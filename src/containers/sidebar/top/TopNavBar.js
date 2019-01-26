import React from 'react';
import styled from 'styled-components';

import SocialIconsBar from '../SocialIconsBar';
import NavLinks from '../NavLinks';

const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4vw;

  & .link {
    border-bottom: 1px solid transparent;
    min-width: 2rem;
    padding: 0 0.2rem;
    text-align: center;

    &.active, &:hover {
      border-bottom: 1px solid black;
      transition: border-color 140ms ease-out;
    }
  }
`;

const LinkWrapper = styled.div`
  margin-left: 3vw;
`;

export default () => (
  <FlexWrapper>
    <SocialIconsBar />
    <LinkWrapper>
      <NavLinks row />
    </LinkWrapper>
  </FlexWrapper>
)