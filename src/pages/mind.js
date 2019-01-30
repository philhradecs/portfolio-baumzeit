import React from 'react';
import styled from 'styled-components';
import { LightTitle, Paragraph, Bold } from '../styles/styledPageComponents';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mindmap = styled.img`
  width: 90%;
  margin-left: -3vw;
`;

export default () => (
  <div>
    <LightTitle>Mind</LightTitle>
    <Paragraph>
      Observing what is happening in the world around me there's <Bold>rarely ever a single source of truth</Bold>.
    </Paragraph>
    <Paragraph>
      That sounds like bad news for any software developer but in the context of working as a team the same thing can be an <Bold>invaluable resource</Bold> if one knows how to <Bold>bridge the metaphorical gap</Bold>. Listening to and effectively mediating between multiple perspectives on any given problem that is non-trivial, is a spring for <Bold>innovative solutions</Bold> and <Bold>inclusive strategies</Bold>.<br/>
    </Paragraph>
    <Paragraph emphasis>
      This is a placeholder image. I am working on an interactive visualization using D3.
    </Paragraph>
    <FlexWrapper>
      <Mindmap src='/other/mindmap_placeholder.png' alt='mindmap placeholder'/>
    </FlexWrapper>
  </div>
)