import ApplicationAdapter from '@ember-data/adapter/json-api';
import ENV from 'kst-development-fastboot/config/environment';

export default class EnquiryAdapter extends ApplicationAdapter {
  host = ENV.APP.emailHost;
}
