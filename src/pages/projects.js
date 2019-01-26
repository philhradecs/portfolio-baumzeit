import React, { Component } from 'react';
import styled from 'styled-components';

import { DarkTitle, Paragraph, Bold } from '../styles/styledPageComponents';
import FilterBar from '../containers/contents/projects/filterbar/FilterBar';
import ShowList from '../containers/contents/projects/showlist/ShowList';

const Wrapper = styled.div`
  margin: ${props => props.theme.isMobile ? '0' : '0 -2.2vw 0 -2.6vw'};
`;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: []
    }
    this.filterToggle = this.filterToggle.bind(this);
  }

  filterToggle(e) {
    const button = e.target;
    const filterKey = e.target.id;
    let newFilterArr = this.state.activeFilters;

    if (button.classList.toggle('active')) {
      newFilterArr = this.state.activeFilters.concat(filterKey);
    } else {
      newFilterArr = newFilterArr.filter(val => val !== filterKey);
    }

    this.setState({
      activeFilters: newFilterArr,
    });
  }

  render() {
    return (
      <Wrapper>
        <DarkTitle>Projects</DarkTitle>
        <Paragraph>
          Browse through some of the projects I've done over the past 14 months. <Bold>Filter by categories</Bold>, look at the <Bold>source code</Bold> and try a <Bold>live version</Bold>.
        </Paragraph>
        <FilterBar filterToggle={this.filterToggle}/>
        <ShowList activeFilters={this.state.activeFilters} />
      </Wrapper>
    )
  }
}

export default Projects;
