import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BlogArticleRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('article', params.article_id);
  }
}
