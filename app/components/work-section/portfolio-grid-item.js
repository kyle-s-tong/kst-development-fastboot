import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class WorkSectionPortfolioGridItemComponent extends Component {
  @action
  openModal() {
    // We need to provide the images for the modal to render which is why
    // we override the openModal argument here.
    this.args.openModal(this.args.item.secondaryImagePaths);
  }
}
