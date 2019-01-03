import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount() {
    this.props.updatePath();
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>
          React, static sites, performance, speed. It's the stuff that makes us
          tick.
        </p>
      </div>
    )
  }
}

export default Contact;