import React, { Component } from 'react';

class Metric extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="metric">
        <div className="metricIndicator">

        </div>
        <div className="metricData">
          <div className="metricTitle">
            <h1>{this.props.metricTitle}</h1>
          </div>
          <h4>This Period</h4>
          <div>{this.props.metric1}</div>
          <h4>vs Last Year (LFL Stores)</h4>
          <div>{this.props.metric2}</div>
          <h4>Index vs. Category</h4>
          <div>{this.props.metric3}</div>
        </div>
      </div>
    )
  }
}

export default Metric;
