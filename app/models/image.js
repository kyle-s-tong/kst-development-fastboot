import Model, { attr, belongsTo } from '@ember-data/model';
import ENV from 'kst-development-fastboot/config/environment';

export default class ImageModel extends Model {
  @attr() uri;
  @belongsTo() article;

  get formattedUrl() {
    return `${ENV.APP.cmsHost}${this.uri.url}`;
  }
}
