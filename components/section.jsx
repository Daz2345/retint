import React, { Component } from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <div className={this.props.topColor} >
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section;
