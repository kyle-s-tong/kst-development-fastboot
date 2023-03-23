import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class WorkSectionWorkComponent extends Component {
  @tracked showModal = false;
  @tracked modalImages = [];

  @action
  openModal(images) {
    if (!images || images.length === 0) {
      return;
    }

    this.modalImages = images;
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }
}
