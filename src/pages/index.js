import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    this.props.updatePath();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>
          React, static sites, performance, speed. It's the stuff that makes us
          tick.
        </p>
      </div>
    )
  }
}

export default Home;