import React, { Component } from 'react';
import styled from 'styled-components';

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
    const filter = button.id;
    let newFilterArr = this.state.activeFilters;

    if (button.classList.toggle('active')) {
      newFilterArr = this.state.activeFilters.concat(filter);
    } else {
      newFilterArr = newFilterArr.filter(val => val !== filter);
    }
    console.log(newFilterArr)
    this.setState({
      activeFilters: newFilterArr
    });
  }

  render() {

    return (
      <div>
        <h1>Projects</h1>
        <p>
          React, static sites, performance, speed. It's the stuff that makes us
          tick.
        </p>
        <FilterBar filterToggle={this.filterToggle}/>
        <ShowList activeFilters={this.state.activeFilters} />
      </div>
    )
  }
}

export default Projects;
