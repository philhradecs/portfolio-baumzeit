import React from 'react';
import styled, { css } from 'styled-components';

import Preview from './Preview';

const ProjectEntry = styled.li`
  background: ${props => props.theme.contentBg};

  height: auto;
  margin: 0 0 2rem 2vw;
  padding: 0rem 2rem 2rem 1.8rem;
  border-radius: 0.3rem;

  display: grid;
  grid-template-columns: 3fr 1fr 10fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    'ti ta ta'
    'pw pw de';
  justify-content: center;

  ${props =>
      props.theme.isMobile && css`
        grid-template-columns: 1fr;
        grid-template-rows: auto 200px auto auto;
        grid-template-areas: 'ti'
                             'pw'
                             'ta'
                             'de';
        height: auto;
      `
  }
  //box-shadow: 0 0 1.7em -0.45em rgba(30, 30, 30, 0.8);
`;

const Tags = styled.p`
  grid-area: ta;
  align-self: center;
  font-family: 'Nunito';
  font-weight: 300;
  font-size: 1rem;
  padding: 0;
  border-bottom: 1px solid white;

  & span {
    font-size: 0.85em;
    margin-right: 0.7rem;
  }
`;
const Title = styled.h2`
  font-family: 'Titillium Web';
  font-weight: 400;
  grid-area: ti;
  align-self: center;
  color: black;
  font-size: 1.2rem;
  padding: 1rem 0;
  margin: 0 1rem 0.2rem 0;
`;
const Description = styled.p`
  font-family: 'Roboto Slab';
  font-weight: 300;
  font-size: 1.1rem;
  grid-area: de;
  margin-top: 1rem;
  margin-left: 3vw;
  line-height: 1.7;
  white-space: pre-line;
`;
const PreviewWrapper = styled.div`
  grid-area: pw;
  transform: translateX(calc(0px - 1.8rem - 2vw - 2px)); /*padding - excess - border*/
  width: calc(100% + calc(1.8rem + 2vw));  
`;

export default ({ projectData: { data, tags, url, img }}) => (
  <ProjectEntry>
    <Title>{data.title}</Title>
    <Tags><span>Focus:</span>{tags.join(' \\ ')}</Tags>
    <PreviewWrapper>
      <Preview url={url} img={img} title={data.title} />
    </PreviewWrapper>
    <Description>{data.description}</Description>
  </ProjectEntry>
)