import Component from '@glimmer/component';

// TODO: Add validation rules
// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ContactSectionContactFormInputComponent extends Component {
  get placeholder() {
    const name = this.args.elementName;
    const capitalisedName = this.capitalise(name);

    if (this.args.isRequiredField) {
      return `*${capitalisedName}:`;
    }
    return `${capitalisedName}:`;
  }

  get formattedErrorMessage() {
    if (!this.args.errorMessage) {
      return '';
    }

    return this.capitalise(this.args.errorMessage);
  }

  capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
