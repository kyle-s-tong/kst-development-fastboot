import ApplicationAdapter from './application';
import ENV from 'kst-development-fastboot/config/environment';

export default class ArticleAdapter extends ApplicationAdapter {
  host = ENV.APP.cmsHost;

  namespace = 'jsonapi/node';

  pathForType(type) {
    return type;
  }
}
