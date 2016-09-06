import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactHighcharts from 'react-highcharts';

import Metric from './metric';
import Section from './section';
import StoryMaster from './storyMaster';
import SectionHeader from './sectionHeader';

import { Metrics } from '../imports/collections/metrics';
import { Stories } from '../imports/collections/stories';
import { Contributions } from '../imports/collections/contributions';

class TopStories extends React.Component {

  renderMetrics(metrics) {
    return metrics.map(metric => {
      return <Metric {...metric} key={metric._id}/>;
    });
  }
  renderStories(stories) {
    return stories.map(story => {
        return <StoryMaster {...story} key={story._id}/>;
      });
  }
  createChart(rawValues) {
    var data = [];
    
    if (!!rawValues) {

        data =  [
          rawValues.chartData.Price,
          rawValues.chartData.Promotion,
          rawValues.chartData.Range,
          rawValues.chartData.NPD,
          rawValues.chartData.OtherFactors
        ];
    }

    var config = {
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
          series:  data 
    };
    return config;
  }
  render() {
    return (
      <div className="container">
        <SectionHeader headerVal="Performance for My Buying Area"/>
        <Section topColor="section pumpkinTop">
          <div className="metrics row">
            {this.renderMetrics(this.props.metrics)}
          </div>
          <ReactHighcharts config= {this.createChart(this.props.contributions)} />
        </Section>
        <SectionHeader headerVal="Areas to investigate in My Buying Area" storyCount={this.props.negativeStories.length}/>
        <Section topColor="section redTop">
          <div className="stories">
            {this.renderStories(this.props.negativeStories)}
          </div>
        </Section>
        <SectionHeader headerVal="Areas performing well in My Buying Area" storyCount={this.props.positiveStories.length}/>
        <Section topColor="section greenTop">
          <div className="stories">
            {this.renderStories(this.props.positiveStories)}
          </div>
        </Section>
        <SectionHeader headerVal="What is Happening Across the Category"/>
        <Section topColor="section pumpkinTop">
        </Section>
      </div>
    );
  }
}

subs = new SubsManager();

// export default TopStories;
export default createContainer(() => {

    subs.subscribe('metrics');
    subs.subscribe('stories');
    subs.subscribe('contributions');

  return {
    metrics: Metrics.find({},{sort:{order:1}}).fetch(),
    positiveStories: Stories.find({percentImpact:{$gte:0}}, {sort:{percentImpact: 1}}).fetch(),
    negativeStories: Stories.find({percentImpact:{$lt:0}}, {sort:{percentImpact: 1}}).fetch(),
    contributions: Contributions.findOne({})
  };
}, TopStories);
