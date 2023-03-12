import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ContactSectionContactFormComponent extends Component {
  @service store;

  @tracked enquiry;

  @tracked submitIsDisabled = true;

  formData = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  get buttonClass() {
    const baseClasses =
      'mx-2 mt-6 rounded-sm border py-2 px-8 text-left text-sm uppercase tracking-wider';
    if (this.submitIsDisabled) {
      return `${baseClasses} border-gray-300 bg-gray-300 text-gray-400`;
    }

    return `${baseClasses} border-kst-blue bg-kst-blue text-white lg:px-4`;
  }

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
