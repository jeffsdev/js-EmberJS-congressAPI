import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee');
  this.route('house-sub', {path: '/house-sub/:committee_id'});
  this.route('bills');
});

export default Router;
