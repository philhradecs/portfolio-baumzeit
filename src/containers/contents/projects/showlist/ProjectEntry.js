import React from 'react';
import styled from 'styled-components';

import Preview from './Preview';

const ProjectEntry = styled.li`

  display: grid;
  grid-template-columns: 2fr 1fr 5fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas: 
    'ti ta ta'
    'pw pw de';
  justify-content: center;
  background: ${props => props.theme.contentBg};

  width: 100%;
  height: 350px;
  margin: 0 0 2rem 2vw;
  padding: 0rem 2rem 2rem 2rem;
  border-radius: 0.3rem;
  //box-shadow: 0 0 1.7em -0.45em rgba(30, 30, 30, 0.8);
`;

const Tags = styled.p`
  grid-area: ta;
  align-self: center;
  margin: 0;
  padding: 0;

  & span {
    font-size: 0.8em;
    margin-right: 0.6rem;
  }
`;
const Title = styled.h2`
  grid-area: ti;
  align-self: center;
  color: #333;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  border-radius: 0.3rem;
`;
const Description = styled.p`
  grid-area: de;
  margin-left: 2rem;
`;
const PreviewWrapper = styled.div`
  grid-area: pw;
  transform: translateX(calc(0px - 2rem - 2vw - 2px));
  width: calc(100% + calc(2rem + 2vw));
`;

const LiveLink = styled.a`
  background: black;
`;

export default ({ projectData: { data, tags, url, img }}) => (
  <ProjectEntry>
    <Tags><span>Focus:</span>{tags.join(' / ')}</Tags>
    <Title>{data.title}</Title>
    <PreviewWrapper>
      <Preview url={url} img={img} title={data.title} />
    </PreviewWrapper>
    <Description>{data.description}</Description>
  </ProjectEntry>
)