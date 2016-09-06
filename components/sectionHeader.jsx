import React, { Component } from 'react';

class SectionHeader extends Component {
  storyCount(){
    return (!!this.props.storyCount) ? "(" + this.props.storyCount + ")" : "";
    }
  render() {

    return (
      <div >
        <h1>{this.props.headerVal} {this.storyCount()}</h1>
      </div>
    )
  }
}

export default SectionHeader;
