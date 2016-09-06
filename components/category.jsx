import React, { Component } from 'react';

class Category extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="category">
        <div className="categoryTitle">{this.props.title}</div>
        <div>{this.props.content}</div>
      </li>
    )
  }
}

export default Category;
