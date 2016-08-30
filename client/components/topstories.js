import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactHighcharts from 'react-highcharts';
import { Session } from 'meteor/session';
import  {Fade} from 'react-bootstrap';

import Metric from './metric';
import Section from './section';
import StoryMaster from './storyMaster';
import SectionHeader from './sectionHeader';

import { Metrics } from '../../imports/collections/metrics';
import { Stories } from '../../imports/collections/stories';
import { Contributions } from '../../imports/collections/contributions';

class TopStories extends Component {

  renderMetrics() {
    return this.props.metricsData.map(metric => {
      return <Metric {...metric} key={metric._id}/>
    })
  }
  renderNegativeStories() {
    return this.props.storiesData.filter(this.isNegative).map(story => {
        return <StoryMaster {...story} key={story._id}/>
      })
  }
  renderPositiveStories() {
    return this.props.storiesData.filter(this.isPositive).map(story => {
        return <StoryMaster {...story} key={story._id}/>
      })
  }
  negativeStoriesCount() {
    return this.props.storiesData.filter(this.isNegative).length;
  }
  positiveStoriesCount() {
    return this.props.storiesData.filter(this.isPositive).length;
  }
  isPositive(value){
     return value.percentImpact >= 0;
  }
  isNegative(value){
     return value.percentImpact < 0;
  }
  createChart() {

    if (!!this.props.contributionsData) {
      data = [
        this.props.contributionsData.Price,
        this.props.contributionsData.Promotion,
        this.props.contributionsData.Range,
        this.props.contributionsData.OtherFactors]
    } else {
      data =  []
    }

    config = {
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
          series: data
    }
    return config
  }
  render() {
    return (
      <div className="container">
        <SectionHeader headerVal="Performance for My Buying Area"/>
        <Section topColor="section pumpkinTop">
          <div className="metrics row">
            {this.renderMetrics()}
          </div>
          <ReactHighcharts config= {this.createChart()}></ReactHighcharts>
        </Section>
        <SectionHeader headerVal="Areas to investigate in My Buying Area" storyCount={this.negativeStoriesCount()}/>
        <Section topColor="section redTop">
          <div className="stories">
          {this.renderNegativeStories()}
          </div>
        </Section>
        <SectionHeader headerVal="Areas performing well in My Buying Area" storyCount={this.positiveStoriesCount()}/>
        <Section topColor="section greenTop">
          <div className="stories">
          {this.renderPositiveStories()}
          </div>
        </Section>
        <SectionHeader headerVal="What is Happening Across the Category"/>
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

  Meteor.subscribe('metrics', periodID);
  Meteor.subscribe('stories', periodID);
  Meteor.subscribe('contributions');

  return {metricsData: Metrics.find({}).fetch(),
          storiesData: Stories.find({}, {sort:{percentImpact: 1}}).fetch(),
          contributionsData: Contributions.findOne({})};
}, TopStories);
