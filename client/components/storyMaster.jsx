import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import FontAwesome from 'react-fontawesome';
import numeral from 'numeral';
import { Link } from 'react-router';

import Category from './category';

    class StoryMaster extends Component {

      indicator(value) {
        if (Number(value) < 0) {
          return <FontAwesome className='red storyIndicator' name='arrow-circle-down' size='2x' />
        } else {
          return <FontAwesome className='green storyIndicator' name='arrow-circle-up' size='2x' />
        }
      }

      getCategories(){
        var categories = [];
        if (!!this.props.productArea) {
          categories.push({title: "Product Area", content: this.props.productArea})
        }
        if (!!this.props.customer) {
          categories.push({title: "Customer", content: this.props.customer})
        }
        if (!!this.props.geography) {
          categories.push({title: "Geography", content: this.props.geography})
        }
        if (!!this.props.channel) {
          categories.push({title: "Channel", content: this.props.channel})
        }
        return categories.map(category => {
          return <Category key={category.title} title={category.title} content={category.content} />
        })
      }

      render() {
        var percentImpact = numeral(this.props.percentImpact).format('0.0%'),
          salesImpact = numeral(this.props.salesImpact).format('$0,0.0a');

          const StoryChartConfig = {
                  chart: {
                    height: 80,
                    width:150,
                    animation: false
                  },
                  title: {
                      text: null
                  },
                  xAxis: {
                      visible: false
                  },
                  yAxis: {
                      visible: false
                  },
                  credits: {
                    enabled: false
                  },
                  legend: {
                    enabled: false
                  },
                  tooltip: {
                      valueSuffix: '%'
                  },
                  plotOptions: {
                      series: {
                          animation: false
                      }
                  },
                  series: [{
                      name: 'percent',
                      data: this.props.chartData,
                      marker: {
                        enabled: false
                      }
                  }]
              }

      const url = `/storydetail/${this.props._id}`;

      return (
        <div className="story" key={this.props.id}>
            <h2 className="storyTitle">{this.indicator(this.props.percentImpact)}{this.props.title}</h2>
            <div className="row">
              <div className="col-md-2">
                <div className="salesImpact">{salesImpact}</div>
                <div className="percentImpact">{percentImpact}</div>
                <ReactHighcharts config= {StoryChartConfig}></ReactHighcharts>
              </div>
              <div className="col-md-10">
                <div className="row">
                  <ul className="categories">
                    {this.getCategories()}
                  </ul>
                </div>
                <div className="row lowerSection">
                  <div className="categoryTitle">Driver</div>
                  <p>{this.props.driver}</p>
                  <div className="categoryTitle">Recommendation</div>
                  <p>{this.props.recommendation}</p>
                </div>
              </div>
            </div>
            <Link to={url}>More Detail >></Link>
	    	</div>
      )
    }
    }

    export default StoryMaster;
