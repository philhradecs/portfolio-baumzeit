import React from 'react';
import styled from 'styled-components';

const ProjectEntry = styled.div`
  background: rgba(255,255,255,0.3);
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
`;

export default ({ projectData: { data, tags } }) => (
  <ProjectEntry>
    <p>{tags.join(' ')}</p>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
  </ProjectEntry>
)