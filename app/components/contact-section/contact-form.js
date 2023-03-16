import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

const REQUIRED_KEYS = ['email', 'message'];

export default class ContactSectionContactFormComponent extends Component {
  @service store;

  @tracked formData = new FormData();

  @tracked submitIsDisabled = true;

  @tracked isSendingEnquiry = false;

  @tracked enquiryHasBeenSent = false;

  get buttonClass() {
    const baseClasses =
      'mx-2 mt-6 rounded-sm py-2 px-8 lg:px-4 text-left text-sm uppercase tracking-wider';
    if (this.submitIsDisabled) {
      return `${baseClasses} bg-gray-300/50 text-gray-500`;
    }

    return `${baseClasses} bg-kst-blue hover:bg-sky-300 text-white`;
  }

  get hasRequiredKeysForEnquiry() {
    const currentKeys = [];
    for (const [key, value] of this.formData) {
      const trimmedValue = value.trim();
      if (trimmedValue) {
        currentKeys.push(key);
      }
    }

    return REQUIRED_KEYS.every((key) => currentKeys.includes(key));
  }

  @action
  formChanged(event) {
    this.enquiryHasBeenSent = false;
    const rawForm = event.currentTarget;
    this.formData = new FormData(rawForm);

    if (this.hasRequiredKeysForEnquiry) {
      this.submitIsDisabled = false;
      return;
    }

    this.submitIsDisabled = true;
  }

  @action
  async submit(e) {
    e.preventDefault();
    if (!this.hasRequiredKeysForEnquiry) {
      return;
    }

    const enquiry = this.store.createRecord(
      'enquiry',
      this.mapFormData(this.formData)
    );

    this.isSendingEnquiry = true;
    try {
      await enquiry.save();
    } catch (err) {
      console.log(err);
    } finally {
      this.isSendingEnquiry = false;
      this.enquiryHasBeenSent = true;
    }
  }

  mapFormData(formData) {
    const mappedData = {};
    for (const [key, value] of formData) {
      mappedData[key] = value;
    }

    return mappedData;
  }
}
