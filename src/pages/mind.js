import React from 'react';
import styled from 'styled-components';
import { LightTitle, Paragraph, Bold } from '../styles/styledPageComponents';

const Mindmap = styled.img`
  width: 100%;
`;

export default () => (
  <div>
    <LightTitle>Mind</LightTitle>
    <Paragraph>
      Observing what is happening in the world around me there's <Bold>rarely ever a single source of truth</Bold>.
    </Paragraph>
    <Paragraph>
      That (which poses a terrifying notion for any software developer) can actually be an <Bold>invaluable resource</Bold> for working in teams if one knows how to <Bold>bridge the metaphorical gap</Bold>. Listening to and effectively mediating between multiple perspectives on a given problem is a <Bold>spring for innovative solutions</Bold> and <Bold>sustainable strategies</Bold>.<br/>
    </Paragraph>
    <Paragraph>
      This is a placeholder mockup. There's more information coming soon.
    </Paragraph>
    <Mindmap src='/other/mindmap_mockup.png' alt='mindmap mockup'/>
  </div>
)