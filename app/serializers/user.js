import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  modelNameFromPayloadKey() {
    return 'user';
  }
}
