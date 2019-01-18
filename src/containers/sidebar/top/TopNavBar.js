import React from 'react';
import styled from 'styled-components';

import SocialIconsBar from '../SocialIconsBar';
import NavLinks from '../NavLinks';

const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
`;

export default ({ location }) => (
  <FlexWrapper>
    <SocialIconsBar />
    <NavLinks row />
  </FlexWrapper>
)