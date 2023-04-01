import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from 'tracked-built-ins';
import { inject as service } from '@ember/service';
import { object, string } from 'yup';

const REQUIRED_KEYS = ['name', 'email', 'message'];

export default class ContactSectionContactFormComponent extends Component {
  @service store;

  @tracked formData = new FormData();

  @tracked submitIsDisabled = true;

  @tracked isSendingEnquiry = false;

  @tracked enquiryHasBeenSent = false;

  errorMessages = tracked({});

  get buttonClass() {
    const baseClasses =
      'mx-2 mt-6 rounded-sm py-2 px-8 lg:px-4 text-left text-sm uppercase tracking-wider';
    if (this.submitIsDisabled) {
      return `${baseClasses} bg-gray-300/30 text-gray-200`;
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

    const mappedData = this.mapFormData(this.formData);

    const validated = await this.validateForm(mappedData);
    if (validated === false) {
      return;
    }

    const enquiry = this.store.createRecord('enquiry', mappedData);

    this.isSendingEnquiry = true;
    try {
      await enquiry.save();
    } catch (err) {
      console.log(err);
    } finally {
      this.isSendingEnquiry = false;
      this.enquiryHasBeenSent = true;
      this.errorMessages = tracked({});
    }
  }

  @action clearErrorMessage(element) {
    if (!this.errorMessages[element]) {
      return;
    }

    this.errorMessages[element] = '';
  }

  mapFormData(formData) {
    const mappedData = {};
    for (const [key, value] of formData) {
      mappedData[key] = value;
    }

    return mappedData;
  }

  async validateForm(data) {
    const validationSchema = object({
      name: string().required(),
      phone: string().nullable(),
      email: string().email().required(),
      message: string().required(),
    });

    try {
      await validationSchema.validate(data);
    } catch (validationError) {
      const { message, type } = validationError;
      this.errorMessages[type] = message;

      return false;
    }

    return true;
  }
}
