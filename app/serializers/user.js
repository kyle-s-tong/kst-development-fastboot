import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  modelNameFromPayloadKey(key) {
    if (key === 'user--user') {
      return 'user';
    }

    return key;
  }
}
