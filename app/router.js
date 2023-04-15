import EmberRouter from '@ember/routing/router';
import config from 'kst-development-fastboot/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('blog', function () {
    this.route('article', { path: '/:article_id' });
  });
});
