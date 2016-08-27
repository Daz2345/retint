import React, { Component } from 'react';

class sectionHeader extends Component {
  render() {
    return (
      <div >
        <h1>{this.props.headerVal}</h1>
      </div>
    )
  }
}

export default sectionHeader;
