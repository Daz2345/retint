import React, { Component } from 'react';

import SectionHeader from './sectionHeader';
import Metric from './metric';

class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <SectionHeader headerVal="Performance for My Buying Area" />
        <div className={this.props.topColor} >
          <div className="metrics">
            <Metric metricTitle="Sales Value" metric1="$6.52M" metric2="-3.0%" metric3="107"/>
            <Metric metricTitle="Sales Volume" metric1="5.31M" metric2="-2.8%" metric3="112"/>
            <Metric metricTitle="Profit" metric1="$1.23M" metric2="+0.2%" metric3="98"/>
            <Metric metricTitle="Market Share" metric1="43.2%" metric2="-0.7pts" metric3="85"/>
          </div>
        </div>
      </div>
    )
  }

}

export default Section;
