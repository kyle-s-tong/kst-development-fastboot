import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ContactSectionContactFormComponent extends Component {
  formData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  @action
  submit() {

  }
}
