import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'kst-development-fastboot/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.APP.emailHost;
}
