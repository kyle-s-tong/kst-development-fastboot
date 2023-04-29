import ApplicationSerializer from './application';

export default class ArticleSerializer extends ApplicationSerializer {
  modelNameFromPayloadKey(key) {
    // API returns 'node--article' which ember data doesn't appreciate.
    if (key === 'node--article') {
      return 'article';
    }

    if (key === 'file--file') {
      return 'image';
    }
  }

  keyForRelationship(key) {
    if (key === 'image') {
      return 'field_image';
    }
  }
}
