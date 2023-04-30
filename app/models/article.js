import Model, { attr, belongsTo } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') title;
  @attr('date') created;
  @attr() body;
  @belongsTo('image') image;
  @belongsTo('user') user;
}
