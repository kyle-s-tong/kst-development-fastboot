import ApplicationAdapter from './application';
export default class ArticleAdapter extends ApplicationAdapter {
  pathForType(type) {
    return type;
  }
}
