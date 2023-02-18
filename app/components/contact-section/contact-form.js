import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ContactSectionContactFormComponent extends Component {
  @service store;

  @tracked enquiry;

  @tracked submitIsDisabled = false;

  formData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  @action
  async submit(e) {
    e.preventDefault();
    this.disableSubmit();
    console.log(this.formData);

    this.enquiry = this.store.createRecord('enquiry', { ...this.formData });

    try {
      await this.enquiry.save();
    } catch (err) {
      console.log(err);
    }

    this.enableSubmit();
  }

  disableSubmit() {
    this.submitIsDisabled = true;

    return this;
  }

  enableSubmit() {
    this.submitIsDisabled = false;

    return this;
  }
}
