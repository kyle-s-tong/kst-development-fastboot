import Model, { attr } from '@ember-data/model';

export default class EnquiryModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') phone;
  @attr('string') message;
}
