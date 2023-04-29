import Model, { attr, belongsTo } from '@ember-data/model';

export default class ImageModel extends Model {
  @attr() uri;
  @belongsTo() article;
}
