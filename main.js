import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

import NavBar from './components/navbar';
// import Landing from './components/landing';
import TopStories from './components/topstories';
import StoryDetail from './components/storyDetail'
import Section from './components/section';

import { Metrics } from './imports/collections/metrics';
import { Stories } from './imports/collections/stories';
import { Contributions } from './imports/collections/contributions';

subs = new SubsManager();

// Root component
@ReactMixin(ReactMeteorData)
class App extends Component {
  
  getMeteorData() { 
    
    subs.subscribe('metrics');
    subs.subscribe('stories');
    subs.subscribe('contributions');


  return {
    metrics: Metrics.find({},{sort:{order:1}}).fetch(),
    positiveStories: Stories.find({percentImpact:{$gte:0}}, {sort:{percentImpact: 1}}).fetch(),
    negativeStories: Stories.find({percentImpact:{$lt:0}}, {sort:{percentImpact: 1}}).fetch(),
    contributions: Contributions.findOne({})
  };
  }
  
    render() {
        return (
              <div>
                <NavBar moduleName="Performance Diagnosis"/>
                { this.props.children }
              </div>
        );
    }
}

AppRoutes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TopStories}/>
      <Route path="/storydetail" component={StoryDetail}/>
        <Route path="/storydetail/:storyID" component={StoryDetail}/>
      <Route path="/help"/>
      <Route path="/settings"/>
      <Route path="/login"/>
    </Route>
  </Router>
);

ReactRouterSSR.Run(AppRoutes);
