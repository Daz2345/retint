import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import numeral from 'numeral';

class Metric extends Component {
  ivcColour(value) {
    if (value < 90) {
      return "red"
    } else if (value > 110) {
      return "green"
    } else {
      return "grey"
    }
  }

  indicator(value) {
    if (Number(value) < 90) {
      return <FontAwesome className='red indicator' name='arrow-circle-down' size='2x' />
    } else if (Number(value) > 110) {
      return <FontAwesome className='green indicator' name='arrow-circle-up' size='2x' />
    } else {
      return <FontAwesome className='grey indicator' name='minus-circle' size='2x' />
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    var metric1 = numeral(this.props.metric1).format(this.props.format1),
        metric2 = numeral(this.props.metric2).format(this.props.format2),
        pts = (this.props.metricTitle == "Market Share") ? "pts" : "";

    return (
      <div className="col-md-3 metric">
        {this.indicator(this.props.metric3)}
        <div className="metricData">
          <div className="metricTitle">
            <h2>{this.props.metricTitle}</h2>
          </div>
          <div className="minorTitle">This Period</div>
          <div className="majorMetric">{metric1}</div>
          <div className="minorTitle">vs Last Year (LFL Stores)</div>
          <div className="minorMetric">{metric2}{pts}</div>
          <div className="minorTitle">Index vs. Category</div>
          <div className={"minorMetric " + this.ivcColour(this.props.metric3)}>{this.props.metric3}</div>
        </div>
      </div>
    )
  }
}

export default Metric;
