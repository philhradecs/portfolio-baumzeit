import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProjectEntry from './ProjectEntry';
import projectsData from '../projectsData';

const List = styled.ul`
  padding: 0;

  & li {
    &.refresh-enter {
      opacity: 0.01;
    }
    &.refresh-enter.refresh-enter-active {
      opacity: 1;
      transition: opacity 240ms ease;
    }
    &.refresh-exit {
      opacity: 1;
    }
    &.refresh-exit.refresh-exit-active {
      opacity: 0.01;
      height: 0;
      transition: opacity 240ms ease,
                  height 240ms ease;
    }
  }
`;

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = { showItems: projectsData }

  }

  filterProjects() {
    const results = projectsData.filter(project => (
      this.props.activeFilters.every(tag => (
        project.tags.includes(tag)
      ))
    ));
    this.setState({ showItems: results });
  }


  render() {
    return (
      <List>
        <TransitionGroup component={null}>
          {this.state.showItems.map(project => (
            <CSSTransition
              key={project.data.title}
              classNames='refresh'
              timeout={240}
            >
              <ProjectEntry projectData={project} />
            </CSSTransition>
            ))
          }
        </TransitionGroup>
      </List>
    )
  }
}

export default ShowList;