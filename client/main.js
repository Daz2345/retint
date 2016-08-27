import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import { Route, IndexRoute } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';

import NavBar from './components/navbar';
import Landing from './components/landing';
import TopStories from './components/topstories';
import StoryDetail from './components/storyDetail'
import Section from './components/section';

// Root component
class App extends Component {
    render() {
        return (
              <div>
                <NavBar />
                { this.props.children }
              </div>
        );
    }
}

// Meteor.startup(() => {
//   ReactDOM.render(
AppRoutes = (
    <Route path="/" component={App}>
      <IndexRoute component={TopStories}/>
      <Route path="/storydetail/:storyID" component={StoryDetail}/>
      <Route path="/help"/>
      <Route path="/settings"/>
      <Route path="/login"/>
    </Route>
);

ReactRouterSSR.Run(AppRoutes);

//   , document.querySelector('.rootContainer'));
// });
