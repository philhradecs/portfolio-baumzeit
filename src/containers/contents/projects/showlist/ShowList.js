import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProjectEntry from './ProjectEntry';
import Delayed from './Delayed';
import projectsData from '../projectsData';

const List = styled.ul`
  padding: 0;

  & li {
    &.refresh-appear {
      opacity: 0.01;
    }
    &.refresh-appear.refresh-appear-active {
      opacity: 1;
      transition: opacity 80ms ease-in;
    }

    &.refresh-enter {
      opacity: 0.01;
    }
    &.refresh-enter.refresh-enter-active {
      opacity: 1;
      transition: opacity 240ms ease;
    }
    &.refresh-exit {
      opacity: 1;
      overflow: hidden;

    }
    &.refresh-exit.refresh-exit-active {
      opacity: 0.01;
      max-height: 0;
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
      transition: opacity 160ms ease,
                  max-height 160ms ease,
                  margin 160ms ease,
                  padding 160ms ease;
    }
  }
`;

export default ({ activeFilters }) => (
<Delayed waitBeforeShow={300}>
  <List>
    <TransitionGroup component={null}>
        {projectsData.map(project => {
          const matches = activeFilters.every(tag => project.tags.includes(tag));
          return matches && (
            <CSSTransition
              key={project.data.title}
              classNames='refresh'
              timeout={{enter:240, exit: 160, appear: 80}}
              appear={true}
            >
              <ProjectEntry projectData={project} />
            </CSSTransition>
          )
        })
      }
    </TransitionGroup>
  </List>
  </Delayed>
)