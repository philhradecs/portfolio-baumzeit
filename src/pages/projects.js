import React, { Component } from 'react';

import { DarkTitle, Paragraph } from '../styles/styledPageComponents';
import FilterBar from '../containers/contents/projects/filterbar/FilterBar';
import ShowList from '../containers/contents/projects/showlist/ShowList';

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
      <div>
        <DarkTitle>Projects</DarkTitle>
        <Paragraph>
          React, static sites, performance, speed. It's the stuff that makes us
          tick.
        </Paragraph>
        <FilterBar filterToggle={this.filterToggle}/>
        <ShowList activeFilters={this.state.activeFilters} />
      </div>
    )
  }
}

export default Projects;
