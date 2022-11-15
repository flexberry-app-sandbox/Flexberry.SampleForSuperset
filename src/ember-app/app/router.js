import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sample-for-superset-brand-l');
  this.route('i-i-s-sample-for-superset-brand-e',
  { path: 'i-i-s-sample-for-superset-brand-e/:id' });
  this.route('i-i-s-sample-for-superset-brand-e.new',
  { path: 'i-i-s-sample-for-superset-brand-e/new' });
  this.route('i-i-s-sample-for-superset-car-l');
  this.route('i-i-s-sample-for-superset-car-e',
  { path: 'i-i-s-sample-for-superset-car-e/:id' });
  this.route('i-i-s-sample-for-superset-car-e.new',
  { path: 'i-i-s-sample-for-superset-car-e/new' });
  this.route('i-i-s-sample-for-superset-producing-country-l');
  this.route('i-i-s-sample-for-superset-producing-country-e',
  { path: 'i-i-s-sample-for-superset-producing-country-e/:id' });
  this.route('i-i-s-sample-for-superset-producing-country-e.new',
  { path: 'i-i-s-sample-for-superset-producing-country-e/new' });
});

export default Router;
