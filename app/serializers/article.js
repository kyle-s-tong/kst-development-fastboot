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

    if (key === 'user--user') {
      return 'user';
    }

    return key;
  }

  keyForRelationship(key) {
    if (key === 'image') {
      return 'field_image';
    }

    if (key === 'user') {
      return 'uid';
    }
  }
}
