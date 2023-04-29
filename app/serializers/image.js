import ApplicationSerializer from './application';

export default class ImageSerializer extends ApplicationSerializer {
  modelNameFromPayloadKey() {
    return 'image';
  }
}
