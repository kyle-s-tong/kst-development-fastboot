import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') title;
  @attr('date') created;
  @attr() body;
}
