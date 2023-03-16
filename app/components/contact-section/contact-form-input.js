import Component from '@glimmer/component';

// TODO: Add validation rules
// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ContactSectionContactFormInputComponent extends Component {
  get placeholder() {
    const name = this.args.elementName;
    const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);

    if (this.args.isRequiredField) {
      return `*${capitalisedName}:`;
    }
    return `${capitalisedName}:`;
  }
}
