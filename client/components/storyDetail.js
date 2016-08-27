import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactHighcharts from 'react-highcharts';
import { Session } from 'meteor/session';

import Section from './section';
import StoryMaster from './storyMaster';
import SectionHeader from './sectionHeader';

import { Metrics } from '../../imports/collections/metrics';
import { Stories } from '../../imports/collections/stories';

const config = {
  chart: {
          height: 200,
          type: 'bar',
          spacingLeft: 50,
          spacingRight: 50
      },
      xAxis: {
        visible: false,
        categories: ['Contribution']
      },
      yAxis: {
        title: {
          text: null
        }
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      legend: {
          reversed: false
      },
      plotOptions: {
          series: {
              stacking: 'normal',
              borderWidth: 0,
              animation: false
          }
      },
      series: [{
          name: 'Price',
          data: [-5],
          // color: '#FF0000'
      }, {
          name: 'Promotion',
          data: [2],
          // color: '#FF0000'
      }, {
          name: 'Range',
          data: [3],
          // color: '#FF0000'
      }, {
          name: 'Other Factors',
          data: [5],
          // color: '#FF0000'
      }]
}

class StoryDetail extends Component {

  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
  return (
    <div className="container">
      <SectionHeader headerVal="Performance for My Buying Area"/>
        <Section topColor="section pumpkinTop">

        </Section>

    </div>
  )
}
}

// export default TopStories;
export default createContainer(() => {

  var periodID = 1
  // Session.get('period') || 1;
  Meteor.subscribe('stories', periodID);

  return {storyData: Stories.find({}, {sort:{percentImpact: 1}}).fetch()};
}, StoryDetail);
