import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class WorkSectionSliderComponent extends Component {
  @tracked selectedImageIndex = 0;

  @action
  slideToNext() {
    if (this.selectedImageIndex >= this.maximumImageIndex) {
      return;
    }

    this.selectedImageIndex += 1;
  }

  @action
  slideToPrevious() {
    if (this.selectedImageIndex === 0) {
      return;
    }

    this.selectedImageIndex -= 1;
  }

  get activeImage() {
    return this.args.images?.[this.selectedImageIndex];
  }

  get maximumImageIndex() {
    return this.args.images?.length - 1;
  }

  get hasMoreThanOneImage() {
    return this.args.images?.length > 1;
  }
}
