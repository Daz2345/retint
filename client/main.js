import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import NavBar from './components/navbar';
import Landing from './components/landing';
import TopStories from './components/topstories';
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


Meteor.startup(() => {
  ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={TopStories}/>
    </Route>
  </Router>
  , document.querySelector('.rootContainer'));
});
