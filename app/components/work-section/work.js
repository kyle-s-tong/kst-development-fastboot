import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class WorkSectionWorkComponent extends Component {
  @tracked showModal = true;
  @tracked modalImages = [
    'assets/img/portfolio/large/p1.webp',
    'assets/img/portfolio/large/p2.webp',
  ];

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
