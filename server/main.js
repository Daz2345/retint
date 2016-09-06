import { Meteor } from 'meteor/meteor';
import { Metrics } from '../imports/collections/metrics';
import { Stories } from '../imports/collections/stories';
import { Contributions } from '../imports/collections/contributions';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish("metrics", function(){
    return Metrics.find({});
  });

  Meteor.publish("stories", function(){
    return Stories.find({});
  });

  Meteor.publish("contributions", function(){
    return Contributions.find({});
  });
});
