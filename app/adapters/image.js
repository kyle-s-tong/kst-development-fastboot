import ApplicationAdapter from './application';

export default class ImageAdapter extends ApplicationAdapter {
  pathForType() {
    return 'field_image';
  }
}
