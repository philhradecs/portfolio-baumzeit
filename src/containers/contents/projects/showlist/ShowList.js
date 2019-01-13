import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';

import ProjectEntry from './ProjectEntry';

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export default withRouteData(({ activeFilters, projectsData }) => (
  <div>
    <List>
      {projectsData.map(project => {
        const matches = activeFilters.every(tag => project.tags.includes(tag));
        return matches && <ProjectEntry key={project.data.title} projectData={project}/>;
        })
      }
    </List>
  </div>
))